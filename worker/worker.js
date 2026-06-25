export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    try {
      if (!env.DB) {
        return json({ ok: false, error: "Binding DB não configurado no Worker." }, 500);
      }

      const path = url.pathname.replace(/\/+$/, "") || "/";
      const method = request.method.toUpperCase();

      if (method === "GET" && path === "/api/ping") {
        return json({
          ok: true,
          app: "Ghosts of Saltmarsh - Ficha Online API",
          version: "3.0.0-mobile-play-sheet",
          loginMode: "character_click_standard_password",
          time: new Date().toISOString()
        });
      }

      // Lista pública: mostra só os cards de personagens para o jogador clicar.
      // Não entrega a ficha completa sem senha.
      if (method === "GET" && path === "/api/public/characters") {
        return listPublicCharacters(request, env, url);
      }

      const authError = checkAuth(request, env);
      if (authError) return authError;

      if (method === "GET" && path === "/api/characters") {
        return listCharacters(request, env, url);
      }

      if (method === "GET" && path === "/api/magias") {
        return listMagias(request, env, url);
      }

      if (method === "GET" && path === "/api/magias-status") {
        return magiasStatus(request, env, url);
      }

      const magiaMatch = path.match(/^\/api\/magias\/([^/]+)$/);
      if (magiaMatch && method === "GET") {
        return getMagia(request, env, url, decodeURIComponent(magiaMatch[1]));
      }

      const changeMatch = path.match(/^\/api\/characters\/([^/]+)\/changes$/);
      if (changeMatch) {
        const id = decodeURIComponent(changeMatch[1]);
        if (method === "GET") return waitCharacterChange(request, env, url, id);
      }

      const match = path.match(/^\/api\/characters\/([^/]+)$/);
      if (match) {
        const id = decodeURIComponent(match[1]);
        if (method === "GET") return getCharacter(request, env, url, id);
        if (method === "PUT" || method === "POST") return upsertCharacter(request, env, url, id);
        if (method === "DELETE") return deleteCharacter(request, env, url, id);
      }

      return json({ ok: false, error: "Rota não encontrada." }, 404);
    } catch (err) {
      return json({ ok: false, error: err && err.message ? err.message : String(err) }, 500);
    }
  }
};

function cors(response) {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type,Authorization,x-api-key,x-player-id,x-campaign-id,x-rpg-password,x-access-password");
  headers.set("Access-Control-Max-Age", "86400");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function json(data, status = 200) {
  return cors(new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }));
}

function checkAuth(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const bearer = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  const apiKey = request.headers.get("x-api-key") || "";

  // Token admin opcional para o mestre.
  if (env.RPG_API_TOKEN && (bearer === env.RPG_API_TOKEN || apiKey === env.RPG_API_TOKEN)) return null;

  // Senha padrão da mesa. Configure como secret no Cloudflare:
  // npx wrangler secret put RPG_DEFAULT_PASSWORD
  const expectedPassword = String(env.RPG_DEFAULT_PASSWORD || env.RPG_PASSWORD || "saltmarsh").trim();
  const suppliedPassword = String(
    request.headers.get("x-rpg-password") ||
    request.headers.get("x-access-password") ||
    ""
  ).trim();

  if (expectedPassword && suppliedPassword === expectedPassword) return null;
  return json({ ok: false, error: "Senha padrão inválida ou ausente." }, 401);
}

function getPlayerId(request, url) {
  return cleanKey(request.headers.get("x-player-id") || url.searchParams.get("userId") || "mesa-saltmarsh");
}

function getCampaignId(request, url) {
  return cleanKey(request.headers.get("x-campaign-id") || url.searchParams.get("campaignId") || "ghosts-of-saltmarsh");
}

function cleanKey(value) {
  return String(value || "")
    .trim()
    .slice(0, 120)
    .replace(/[^\p{L}\p{N}_@.\-:/ ]/gu, "_") || "default";
}

function safeParseCharacter(row) {
  try {
    const c = JSON.parse(row.character_json || "{}");
    c.id = c.id || row.id;
    c.campaignId = c.campaignId || row.campaign_id;
    c.updatedAt = c.updatedAt || row.updated_at;
    c.__online = { revision: row.revision, updatedAt: row.updated_at };
    return c;
  } catch {
    return {
      id: row.id,
      campaignId: row.campaign_id,
      updatedAt: row.updated_at,
      meta: { nomePersonagem: row.name || "Personagem" },
      __online: { revision: row.revision, updatedAt: row.updated_at, parseError: true }
    };
  }
}

function safePublicCharacter(row) {
  const c = safeParseCharacter(row);
  return {
    id: c.id || row.id,
    name: (c.meta && c.meta.nomePersonagem) || row.name || "Personagem",
    classeNivel: (c.meta && c.meta.classeNivel) || "",
    raca: (c.meta && c.meta.raca) || "",
    faccao: (c.campanha && c.campanha.faccao) || "",
    mareAtual: (c.campanha && c.campanha.mareAtual) || "",
    marcaCampanha: (c.campanha && c.campanha.marcaCampanha) || "",
    corrupcao: (c.campanha && c.campanha.corrupcao) || 0,
    updatedAt: c.updatedAt || row.updated_at
  };
}

async function listPublicCharacters(request, env, url) {
  const campaignId = getCampaignId(request, url);

  const result = await env.DB.prepare(`
    SELECT id, user_id, campaign_id, name, character_json, revision, created_at, updated_at
    FROM rpg_characters
    WHERE campaign_id = ? AND deleted_at IS NULL
    ORDER BY name COLLATE NOCASE ASC, updated_at DESC
  `).bind(campaignId).all();

  const rows = result.results || [];
  return json({
    ok: true,
    public: true,
    campaignId,
    count: rows.length,
    characters: rows.map(safePublicCharacter)
  });
}

async function listCharacters(request, env, url) {
  const campaignId = getCampaignId(request, url);

  const result = await env.DB.prepare(`
    SELECT id, user_id, campaign_id, name, character_json, revision, created_at, updated_at
    FROM rpg_characters
    WHERE campaign_id = ? AND deleted_at IS NULL
    ORDER BY name COLLATE NOCASE ASC, updated_at DESC
  `).bind(campaignId).all();

  const rows = result.results || [];
  return json({
    ok: true,
    campaignId,
    count: rows.length,
    characters: rows.map(safeParseCharacter)
  });
}

async function getCharacter(request, env, url, id) {
  const campaignId = getCampaignId(request, url);

  const row = await env.DB.prepare(`
    SELECT id, user_id, campaign_id, name, character_json, revision, created_at, updated_at
    FROM rpg_characters
    WHERE id = ? AND campaign_id = ? AND deleted_at IS NULL
  `).bind(id, campaignId).first();

  if (!row) return json({ ok: false, error: "Personagem não encontrado." }, 404);
  return json({ ok: true, character: safeParseCharacter(row) });
}

async function upsertCharacter(request, env, url, idFromPath) {
  const userId = getPlayerId(request, url);
  const campaignId = getCampaignId(request, url);
  const body = await request.json().catch(() => ({}));
  const character = body.character || body;
  const id = cleanKey(idFromPath || character.id || crypto.randomUUID());

  character.id = id;
  character.campaignId = character.campaignId || campaignId;
  character.updatedAt = new Date().toISOString();

  const name =
    (character.meta && character.meta.nomePersonagem) ||
    character.name ||
    "Personagem sem nome";

  const now = new Date().toISOString();
  const payload = JSON.stringify(character);

  await env.DB.prepare(`
    INSERT INTO rpg_characters
      (id, user_id, campaign_id, name, character_json, revision, created_at, updated_at, deleted_at)
    VALUES
      (?, ?, ?, ?, ?, 1, ?, ?, NULL)
    ON CONFLICT(id) DO UPDATE SET
      user_id = excluded.user_id,
      campaign_id = excluded.campaign_id,
      name = excluded.name,
      character_json = excluded.character_json,
      revision = rpg_characters.revision + 1,
      updated_at = excluded.updated_at,
      deleted_at = NULL
  `).bind(id, userId, campaignId, name, payload, now, now).run();

  const row = await env.DB.prepare(`
    SELECT id, user_id, campaign_id, name, character_json, revision, created_at, updated_at
    FROM rpg_characters
    WHERE id = ? AND campaign_id = ?
  `).bind(id, campaignId).first();

  return json({ ok: true, character: safeParseCharacter(row) });
}

async function deleteCharacter(request, env, url, id) {
  const campaignId = getCampaignId(request, url);
  const now = new Date().toISOString();

  await env.DB.prepare(`
    UPDATE rpg_characters
    SET deleted_at = ?, updated_at = ?
    WHERE id = ? AND campaign_id = ?
  `).bind(now, now, id, campaignId).run();

  return json({ ok: true, deletedId: id });
}


async function getTableColumns(env, tableName) {
  try {
    const info = await env.DB.prepare(`PRAGMA table_info(${tableName})`).all();
    return (info.results || []).map(r => r.name);
  } catch {
    return [];
  }
}

async function assertManualMagiasSchema(env) {
  const cols = await getTableColumns(env, "magias");
  if (!cols.length) {
    throw new Error("Tabela magias não existe. Rode schema/magias_ptbr_pdf_schema_seed_RESET.sql no D1.");
  }
  if (!cols.includes("nome_pt") || !cols.includes("descricao_pt")) {
    throw new Error("Tabela magias está em formato antigo. Rode schema/magias_ptbr_pdf_schema_seed_RESET.sql para recriar as magias manuais PT-BR.");
  }
}

async function magiasStatus(request, env, url) {
  const cols = await getTableColumns(env, "magias");
  if (!cols.length) {
    return json({
      ok: false,
      status: "sem_tabela_magias",
      mensagem: "Tabela magias não existe. Execute o arquivo schema/magias_ptbr_pdf_schema_seed_RESET.sql."
    });
  }

  const formatoManual = cols.includes("nome_pt") && cols.includes("descricao_pt");
  let total = 0;
  let porNivel = [];

  if (formatoManual) {
    const row = await env.DB.prepare("SELECT COUNT(*) AS total FROM magias").first();
    const levels = await env.DB.prepare(`
      SELECT nivel, COUNT(*) AS total
      FROM magias
      GROUP BY nivel
      ORDER BY nivel
    `).all();
    total = Number(row && row.total ? row.total : 0);
    porNivel = levels.results || [];
  }

  return json({
    ok: formatoManual,
    status: formatoManual ? "ok" : "schema_antigo",
    total_magias: total,
    por_nivel: porNivel,
    colunas_magias: cols,
    mensagem: formatoManual
      ? "Banco de magias manuais OK."
      : "Tabela magias existe, mas está em formato antigo. Execute schema/magias_ptbr_pdf_schema_seed_RESET.sql."
  });
}


function parseBoolFlag(value) {
  return value === 1 || value === "1" || value === true;
}

function spellPublic(row) {
  return {
    id: row.id,
    nome_pt: row.nome_pt,
    slug: row.slug,
    nivel: row.nivel,
    nivel_label: row.nivel === 0 ? "Truque" : row.nivel + "º nível",
    escola: row.escola,
    ritual: Number(row.ritual || 0),
    concentracao: Number(row.concentracao || 0),
    tempo_conjuracao: row.tempo_conjuracao,
    alcance: row.alcance,
    componentes: row.componentes,
    duracao: row.duracao,
    descricao_pt: row.descricao_pt,
    tipo_uso: row.tipo_uso,
    exige_ataque: Number(row.exige_ataque || 0),
    tipo_ataque: row.tipo_ataque,
    exige_resistencia: Number(row.exige_resistencia || 0),
    atributo_resistencia: row.atributo_resistencia,
    atributo_soma: row.atributo_soma,
    formula_dado_base: row.formula_dado_base,
    tipo_dano_padrao: row.tipo_dano_padrao,
    pagina_pdf: row.pagina_pdf,
    fonte: row.fonte,
    classes: row.classes ? String(row.classes).split(",").map(s => s.trim()).filter(Boolean) : []
  };
}

async function listMagias(request, env, url) {
  await assertManualMagiasSchema(env);
  const q = String(url.searchParams.get("q") || "").trim();
  const classe = String(url.searchParams.get("classe") || "").trim();
  const tipoUso = String(url.searchParams.get("tipo_uso") || url.searchParams.get("tipo") || "").trim();
  const nivelRaw = url.searchParams.get("nivel");
  const limit = Math.max(1, Math.min(1000, Number(url.searchParams.get("limit") || 500)));

  const where = [];
  const binds = [];

  if (q) {
    where.push("(m.nome_pt LIKE ? OR m.descricao_pt LIKE ? OR m.escola LIKE ?)");
    binds.push("%" + q + "%", "%" + q + "%", "%" + q + "%");
  }

  if (classe) {
    where.push("m.id IN (SELECT magia_id FROM magia_classes WHERE classe = ?)");
    binds.push(classe);
  }

  if (tipoUso) {
    where.push("m.tipo_uso = ?");
    binds.push(tipoUso);
  }

  if (nivelRaw !== null && nivelRaw !== "") {
    where.push("m.nivel = ?");
    binds.push(Number(nivelRaw));
  }

  const sqlWhere = where.length ? "WHERE " + where.join(" AND ") : "";

  const result = await env.DB.prepare(`
    SELECT
      m.id,
      m.nome_pt,
      m.slug,
      m.nivel,
      m.escola,
      m.ritual,
      m.concentracao,
      m.tempo_conjuracao,
      m.alcance,
      m.componentes,
      m.duracao,
      m.descricao_pt,
      m.tipo_uso,
      m.exige_ataque,
      m.tipo_ataque,
      m.exige_resistencia,
      m.atributo_resistencia,
      m.atributo_soma,
      m.formula_dado_base,
      m.tipo_dano_padrao,
      m.pagina_pdf,
      m.fonte,
      GROUP_CONCAT(mc.classe, ', ') AS classes
    FROM magias m
    LEFT JOIN magia_classes mc ON mc.magia_id = m.id
    ${sqlWhere}
    GROUP BY m.id
    ORDER BY m.nivel ASC, m.nome_pt COLLATE NOCASE ASC
    LIMIT ?
  `).bind(...binds, limit).all();

  const totalRow = await env.DB.prepare(`
    SELECT COUNT(*) AS total
    FROM magias m
    ${sqlWhere}
  `).bind(...binds).first();

  return json({
    ok: true,
    count: (result.results || []).length,
    total: Number(totalRow && totalRow.total ? totalRow.total : 0),
    filters: { q, classe, tipo_uso: tipoUso, nivel: nivelRaw, limit },
    magias: (result.results || []).map(spellPublic)
  });
}

async function getMagia(request, env, url, slug) {
  await assertManualMagiasSchema(env);
  const row = await env.DB.prepare(`
    SELECT
      m.*,
      GROUP_CONCAT(mc.classe, ', ') AS classes
    FROM magias m
    LEFT JOIN magia_classes mc ON mc.magia_id = m.id
    WHERE m.slug = ?
    GROUP BY m.id
  `).bind(slug).first();

  if (!row) return json({ ok: false, error: "Magia não encontrada." }, 404);

  const usos = await env.DB.prepare(`
    SELECT espaco_usado, formula_dado, soma, tipo_resultado, tipo_dano, observacao
    FROM magia_uso_espaco
    WHERE magia_id = ?
    ORDER BY espaco_usado ASC
  `).bind(row.id).all();

  const escalas = await env.DB.prepare(`
    SELECT nivel_personagem_min, formula_dado, soma, tipo_resultado, tipo_dano, observacao
    FROM magia_escala_personagem
    WHERE magia_id = ?
    ORDER BY nivel_personagem_min ASC
  `).bind(row.id).all();

  return json({
    ok: true,
    magia: spellPublic(row),
    usos_espaco: usos.results || [],
    escala_personagem: escalas.results || []
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getCharacterRow(env, id, campaignId) {
  return await env.DB.prepare(`
    SELECT id, user_id, campaign_id, name, character_json, revision, created_at, updated_at
    FROM rpg_characters
    WHERE id = ? AND campaign_id = ? AND deleted_at IS NULL
  `).bind(id, campaignId).first();
}

async function waitCharacterChange(request, env, url, id) {
  const campaignId = getCampaignId(request, url);
  const sinceRevision = Number(url.searchParams.get("sinceRevision") || 0);
  const timeoutSeconds = Math.max(3, Math.min(28, Number(url.searchParams.get("timeout") || 25)));
  const started = Date.now();
  const maxMs = timeoutSeconds * 1000;

  while (Date.now() - started < maxMs) {
    const row = await getCharacterRow(env, id, campaignId);

    if (!row) {
      return json({ ok: false, error: "Personagem não encontrado." }, 404);
    }

    const revision = Number(row.revision || 0);

    if (!sinceRevision || revision > sinceRevision) {
      return json({
        ok: true,
        changed: true,
        characterId: id,
        revision,
        updatedAt: row.updated_at,
        character: safeParseCharacter(row)
      });
    }

    await delay(1000);
  }

  const row = await getCharacterRow(env, id, campaignId);

  if (!row) {
    return json({ ok: false, error: "Personagem não encontrado." }, 404);
  }

  return json({
    ok: true,
    changed: false,
    characterId: id,
    revision: Number(row.revision || 0),
    updatedAt: row.updated_at
  });
}
