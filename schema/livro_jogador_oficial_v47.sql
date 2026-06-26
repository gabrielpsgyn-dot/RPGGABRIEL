-- V47 Livro do Jogador oficial sem achismo
-- Tabelas técnicas para importar regras estruturadas sem copiar texto corrido do livro.
CREATE TABLE IF NOT EXISTS fonte_oficial (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  codigo TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  arquivo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'ativo'
);
CREATE TABLE IF NOT EXISTS regra_oficial_ref (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fonte_codigo TEXT NOT NULL,
  categoria TEXT NOT NULL,
  chave TEXT NOT NULL,
  nome TEXT NOT NULL,
  pagina INTEGER,
  dados_json TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmado_no_livro',
  UNIQUE(fonte_codigo, categoria, chave)
);
