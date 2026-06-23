-- Ghosts of Saltmarsh - Ficha Online RPG
-- Banco recomendado: Cloudflare D1 / SQLite

CREATE TABLE IF NOT EXISTS rpg_characters (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  campaign_id TEXT NOT NULL DEFAULT 'ghosts-of-saltmarsh',
  name TEXT,
  character_json TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  deleted_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_rpg_characters_user_campaign
ON rpg_characters(user_id, campaign_id, deleted_at, updated_at);

CREATE TABLE IF NOT EXISTS rpg_character_audit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  character_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  campaign_id TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  payload_json TEXT
);
