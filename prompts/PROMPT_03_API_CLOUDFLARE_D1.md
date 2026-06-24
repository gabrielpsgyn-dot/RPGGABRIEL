# Prompt — API Cloudflare Worker + D1

Você está trabalhando na API do RPGGABRIEL.

Arquivos:
- `worker/worker.js`
- `worker/wrangler.toml`
- `schema/schema-d1-rpg.sql`

Contexto:
- Worker: `ficharpg`
- Banco D1: `ghosts_saltmarsh_rpg`
- Binding: `DB`
- Campanha: `ghosts-of-saltmarsh`
- Senha padrão: secret `RPG_DEFAULT_PASSWORD`

Regras:
- Rotas `/api/...` são API.
- A raiz `/` deve servir o frontend estático de `public/index.html`.
- Não exigir senha em `/api/ping`.
- Não entregar ficha completa em lista pública sem senha.
- Validar senha por header:
  - `x-rpg-password`
  - ou `x-access-password`
- Manter CORS liberado para o frontend.
- Não remover suporte a D1.

Rotas esperadas:
- `GET /api/ping`
- `GET /api/public/characters`
- `GET /api/characters`
- `GET /api/characters/:id`
- `PUT /api/characters/:id`
- `DELETE /api/characters/:id`

Critérios de aceite:
- `/api/ping` retorna `{ ok: true }`.
- `/api/characters` retorna 401 sem senha.
- `/api/characters` retorna ok com senha correta.
- O Worker mostra binding `env.DB`.
