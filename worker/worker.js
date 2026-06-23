export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    try {
      if (!env.DB) {
        return json({ ok: false, error: "Binding DB nÃ£o configurado no Worker." }, 500);
      }

      const path = url.pathname.replace(/\/+$/, "") || "/";
      const method = request.method.toUpperCase();

      // Serve a ficha visual no endereço raiz do Worker.
      // Rotas /api continuam como API.
      if (!path.startsWith("/api")) {
        if (env.ASSETS) return env.ASSETS.fetch(request);
        return new Response("Frontend não configurado no Worker.", { status: 500 });
      }

      if (method === "GET" && path === "/api/ping") {
        return json({
          ok: true,
          app: "Ghosts of Saltmarsh - Ficha Online API",
          version: "1.1.0-password-flow",
          loginMode: "character_click_standard_password",
          time: new Date().toISOString()
        });
      }

      // Lista pÃºblica: mostra sÃ³ os cards de personagens para o jogador clicar.
      // NÃ£o entrega a ficha completa sem senha.
      if (method === "GET" && path === "/api/public/characters") {
        return listPublicCharacters(request, env, url);
      }

      const authError = checkAuth(request, env);
      if (authError) return authError;

      if (method === "GET" && path === "/api/characters") {
        return listCharacters(request, env, url);
      }

      const match = path.match(/^\/api\/characters\/([^/]+)$/);
      if (match) {
        const id = decodeURIComponent(match[1]);
        if (method === "GET") return getCharacter(request, env, url, id);
        if (method === "PUT" || method === "POST") return upsertCharacter(request, env, url, id);
        if (method === "DELETE") return deleteCharacter(request, env, url, id);
      }

      return json({ ok: false, error: "Rota nÃ£o encontrada." }, 404);
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

  // Senha padrÃ£o da mesa. Configure como secret no Cloudflare:
  // npx wrangler secret put RPG_DEFAULT_PASSWORD
  const expectedPassword = String(env.RPG_DEFAULT_PASSWORD || env.RPG_PASSWORD || "saltmarsh").trim();
  const suppliedPassword = String(
    request.headers.get("x-rpg-password") ||
    request.headers.get("x-access-password") ||
    ""
  ).trim();

  if (expectedPassword && suppliedPassword === expectedPassword) return null;
  return json({ ok: false, error: "Senha padrÃ£o invÃ¡lida ou ausente." }, 401);
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

  if (!row) return json({ ok: false, error: "Personagem nÃ£o encontrado." }, 404);
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

