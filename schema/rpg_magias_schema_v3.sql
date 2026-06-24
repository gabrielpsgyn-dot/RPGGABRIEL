-- ============================================================
-- RPG ONLINE - BANCO DE MAGIAS 5E / SRD
-- Padrão: SQLite / Cloudflare D1
-- Versão: v3 - personagem_id TEXT / preparado para importação automática de magias SRD
-- ============================================================

PRAGMA foreign_keys = ON;

-- ============================================================
-- 1. TABELA PRINCIPAL DE MAGIAS
-- ============================================================

CREATE TABLE IF NOT EXISTS magias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  nome TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  nivel INTEGER NOT NULL CHECK (nivel BETWEEN 0 AND 9),
  -- 0 = truque
  -- 1 a 9 = círculo / espaço da magia

  escola TEXT,
  tempo_conjuracao TEXT,
  alcance TEXT,
  componentes TEXT,
  duracao TEXT,

  concentracao INTEGER NOT NULL DEFAULT 0 CHECK (concentracao IN (0, 1)),
  ritual INTEGER NOT NULL DEFAULT 0 CHECK (ritual IN (0, 1)),

  descricao TEXT NOT NULL,

  tipo_uso TEXT NOT NULL DEFAULT 'utilidade',
  -- dano
  -- cura
  -- buff
  -- debuff
  -- controle
  -- defesa
  -- invocacao
  -- utilidade

  exige_ataque INTEGER NOT NULL DEFAULT 0 CHECK (exige_ataque IN (0, 1)),
  tipo_ataque TEXT,
  -- corpo_a_corpo_magico
  -- distancia_magico
  -- ataque_com_arma
  -- nenhum

  exige_resistencia INTEGER NOT NULL DEFAULT 0 CHECK (exige_resistencia IN (0, 1)),
  atributo_resistencia TEXT,
  -- FOR, DES, CON, INT, SAB, CAR

  atributo_soma TEXT NOT NULL DEFAULT 'nenhum',
  -- mod_conjuracao
  -- modificador_forca
  -- modificador_destreza
  -- bonus_proficiencia
  -- nenhum

  tipo_dano_padrao TEXT,
  fonte TEXT,
  observacao TEXT,

  ativo INTEGER NOT NULL DEFAULT 1 CHECK (ativo IN (0, 1)),

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 2. USO POR ESPAÇO DE MAGIA
-- ============================================================

CREATE TABLE IF NOT EXISTS magia_uso_espaco (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  magia_id INTEGER NOT NULL,

  espaco_usado INTEGER NOT NULL CHECK (espaco_usado BETWEEN 1 AND 9),

  formula_dado TEXT,
  soma TEXT NOT NULL DEFAULT 'nenhum',

  tipo_resultado TEXT NOT NULL DEFAULT 'outro',
  -- dano
  -- cura
  -- escudo
  -- quantidade_alvos
  -- quantidade_projeteis
  -- outro

  tipo_dano TEXT,
  quantidade_alvos INTEGER,
  quantidade_projeteis INTEGER,

  descricao_uso TEXT,
  observacao TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (magia_id) REFERENCES magias(id) ON DELETE CASCADE,

  UNIQUE (magia_id, espaco_usado)
);

-- ============================================================
-- 3. ESCALA DE TRUQUES POR NÍVEL DO PERSONAGEM
-- ============================================================

CREATE TABLE IF NOT EXISTS magia_escala_personagem (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  magia_id INTEGER NOT NULL,

  nivel_personagem_min INTEGER NOT NULL CHECK (nivel_personagem_min BETWEEN 1 AND 20),

  formula_dado TEXT NOT NULL,
  soma TEXT NOT NULL DEFAULT 'nenhum',

  tipo_resultado TEXT NOT NULL DEFAULT 'dano',
  tipo_dano TEXT,

  descricao_uso TEXT,
  observacao TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (magia_id) REFERENCES magias(id) ON DELETE CASCADE,

  UNIQUE (magia_id, nivel_personagem_min)
);

-- ============================================================
-- 4. CLASSES QUE PODEM USAR CADA MAGIA
-- ============================================================

CREATE TABLE IF NOT EXISTS magia_classes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  magia_id INTEGER NOT NULL,
  classe TEXT NOT NULL,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (magia_id) REFERENCES magias(id) ON DELETE CASCADE,

  UNIQUE (magia_id, classe)
);

-- ============================================================
-- 5. MAGIAS CONHECIDAS / PREPARADAS PELO PERSONAGEM
-- ============================================================

CREATE TABLE IF NOT EXISTS personagem_magias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  personagem_id TEXT NOT NULL,
  magia_id INTEGER NOT NULL,

  preparada INTEGER NOT NULL DEFAULT 0 CHECK (preparada IN (0, 1)),
  conhecida INTEGER NOT NULL DEFAULT 1 CHECK (conhecida IN (0, 1)),

  origem TEXT,
  -- classe
  -- raça
  -- talento
  -- item_magico
  -- pacto
  -- outra

  observacao TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (magia_id) REFERENCES magias(id) ON DELETE CASCADE,

  UNIQUE (personagem_id, magia_id)
);

-- ============================================================
-- 6. ESPAÇOS DE MAGIA DO PERSONAGEM
-- ============================================================

CREATE TABLE IF NOT EXISTS personagem_espacos_magia (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  personagem_id TEXT NOT NULL,

  nivel_espaco INTEGER NOT NULL CHECK (nivel_espaco BETWEEN 1 AND 9),

  total INTEGER NOT NULL DEFAULT 0 CHECK (total >= 0),
  usados INTEGER NOT NULL DEFAULT 0 CHECK (usados >= 0),

  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  UNIQUE (personagem_id, nivel_espaco)
);

-- ============================================================
-- 7. LOG DE USO DE MAGIAS
-- ============================================================

CREATE TABLE IF NOT EXISTS personagem_magia_uso_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  personagem_id TEXT NOT NULL,
  magia_id INTEGER NOT NULL,

  espaco_usado INTEGER,
  -- NULL para truques

  resultado_rolagem TEXT,
  observacao TEXT,

  used_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (magia_id) REFERENCES magias(id) ON DELETE CASCADE
);

-- ============================================================
-- 8. FONTE / LICENÇA / CONTROLE DE IMPORTAÇÃO
-- ============================================================

CREATE TABLE IF NOT EXISTS magia_fontes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chave TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  url TEXT,
  licenca TEXT,
  observacao TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS magia_import_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fonte_chave TEXT NOT NULL,
  status TEXT NOT NULL,
  total_recebido INTEGER DEFAULT 0,
  total_importado INTEGER DEFAULT 0,
  total_erros INTEGER DEFAULT 0,
  detalhe TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO magia_fontes (
  chave,
  nome,
  url,
  licenca,
  observacao
)
VALUES (
  'srd_spells_vorpalhex',
  'SRD Spells JSON',
  'https://github.com/vorpalhex/srd_spells',
  'OGL 1.0a / SRD',
  'Base aberta de magias SRD usada para alimentar a ficha online. Verificar obrigações de atribuição/licença no projeto final.'
);

-- ============================================================
-- 9. ÍNDICES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_magias_nome
ON magias (nome);

CREATE INDEX IF NOT EXISTS idx_magias_slug
ON magias (slug);

CREATE INDEX IF NOT EXISTS idx_magias_nivel
ON magias (nivel);

CREATE INDEX IF NOT EXISTS idx_magias_tipo_uso
ON magias (tipo_uso);

CREATE INDEX IF NOT EXISTS idx_magias_escola
ON magias (escola);

CREATE INDEX IF NOT EXISTS idx_magia_uso_espaco_magia
ON magia_uso_espaco (magia_id, espaco_usado);

CREATE INDEX IF NOT EXISTS idx_magia_escala_personagem_magia
ON magia_escala_personagem (magia_id, nivel_personagem_min);

CREATE INDEX IF NOT EXISTS idx_magia_classes_classe
ON magia_classes (classe);

CREATE INDEX IF NOT EXISTS idx_personagem_magias_personagem
ON personagem_magias (personagem_id);

CREATE INDEX IF NOT EXISTS idx_personagem_espacos_magia_personagem
ON personagem_espacos_magia (personagem_id);

-- ============================================================
-- 10. VIEWS
-- ============================================================

CREATE VIEW IF NOT EXISTS vw_magias_resumo AS
SELECT
  m.id,
  m.nome,
  m.slug,
  m.nivel,
  CASE
    WHEN m.nivel = 0 THEN 'Truque'
    ELSE 'Nível ' || m.nivel
  END AS nivel_label,
  m.escola,
  m.tempo_conjuracao,
  m.alcance,
  m.componentes,
  m.duracao,
  m.concentracao,
  m.ritual,
  m.tipo_uso,
  m.exige_ataque,
  m.tipo_ataque,
  m.exige_resistencia,
  m.atributo_resistencia,
  m.atributo_soma,
  m.tipo_dano_padrao,
  m.fonte,
  m.ativo
FROM magias m
WHERE m.ativo = 1;

CREATE VIEW IF NOT EXISTS vw_magias_com_classes AS
SELECT
  m.id AS magia_id,
  m.nome,
  m.slug,
  m.nivel,
  m.escola,
  m.tipo_uso,
  GROUP_CONCAT(mc.classe, ', ') AS classes
FROM magias m
LEFT JOIN magia_classes mc ON mc.magia_id = m.id
WHERE m.ativo = 1
GROUP BY
  m.id,
  m.nome,
  m.slug,
  m.nivel,
  m.escola,
  m.tipo_uso;

CREATE VIEW IF NOT EXISTS vw_magias_rolagem AS
SELECT
  m.id AS magia_id,
  m.nome,
  m.slug,
  m.nivel,
  u.espaco_usado,
  u.formula_dado,
  u.soma,
  u.tipo_resultado,
  u.tipo_dano,
  u.quantidade_alvos,
  u.quantidade_projeteis,
  u.descricao_uso,
  u.observacao
FROM magias m
JOIN magia_uso_espaco u ON u.magia_id = m.id
WHERE m.ativo = 1;

-- ============================================================
-- 11. CONSULTAS DE TESTE
-- ============================================================

-- Total de magias importadas:
-- SELECT COUNT(*) AS total_magias FROM magias;

-- Total por nível:
-- SELECT nivel, COUNT(*) AS total FROM magias GROUP BY nivel ORDER BY nivel;

-- Buscar magias de classe:
-- SELECT m.nome, m.nivel, m.escola
-- FROM magias m
-- JOIN magia_classes mc ON mc.magia_id = m.id
-- WHERE mc.classe = 'Mago'
-- ORDER BY m.nivel, m.nome;

-- Buscar rolagem por espaço:
-- SELECT *
-- FROM vw_magias_rolagem
-- WHERE slug = 'cure-wounds' AND espaco_usado = 3;

-- Buscar escala de truque pelo nível do personagem:
-- SELECT *
-- FROM magia_escala_personagem
-- WHERE magia_id = (SELECT id FROM magias WHERE slug = 'acid-splash')
--   AND nivel_personagem_min <= 8
-- ORDER BY nivel_personagem_min DESC
-- LIMIT 1;
