# Ghosts of Saltmarsh — Ficha Online V5

Pacote pronto para sincronizar no Git e publicar no Cloudflare.

## Fluxo do jogador

1. Abre o site.
2. Clica no personagem.
3. Digita a senha padrão da mesa.
4. Entra na ficha.

O jogador não precisa configurar endpoint, token, código de mesa ou banco.

## Estrutura

```txt
public/index.html              # Ficha online mobile
worker/worker.js               # API Cloudflare Worker
worker/wrangler.toml.example   # Exemplo de configuração do Worker
schema/schema-d1-rpg.sql       # Banco D1/SQLite
docs/                          # Cópia do HTML original da versão V5
package.json                   # Scripts auxiliares
```

## Subir no Git

```bash
git init
git add .
git commit -m "Ficha online Ghosts of Saltmarsh V5"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Publicar o frontend no Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Pages.
2. Conecte o repositório Git.
3. Configuração do build:
   - Framework preset: None
   - Build command: vazio
   - Build output directory: `public`
4. Publicar.

## Publicar a API no Cloudflare Worker

Instale dependências:

```bash
npm install
```

Crie o banco D1:

```bash
cd worker
npx wrangler d1 create ghosts_saltmarsh_rpg
```

Copie o `database_id` retornado e crie o arquivo real:

```bash
cp wrangler.toml.example wrangler.toml
```

Cole o `database_id` em `worker/wrangler.toml`.

Aplique o schema:

```bash
npx wrangler d1 execute ghosts_saltmarsh_rpg --file=../schema/schema-d1-rpg.sql
```

Configure a senha padrão da mesa:

```bash
npx wrangler secret put RPG_DEFAULT_PASSWORD
```

Publique a API:

```bash
npx wrangler deploy
```

## Ligar frontend na API

Abra `public/index.html` e localize:

```js
const DEFAULT_API_BASE = '';
```

Troque pelo domínio do Worker:

```js
const DEFAULT_API_BASE = 'https://ghosts-saltmarsh-rpg-api.SEUSUBDOMINIO.workers.dev';
```

Depois faça commit e push novamente.

## Cadastrar personagens online

No primeiro uso, o mestre pode abrir a ficha, criar/importar personagens localmente, abrir a área **Mestre / Configuração**, preencher o endpoint da API e clicar em **Enviar local**.

Depois disso, os jogadores só clicam no personagem e digitam a senha padrão.

## Segurança simples da mesa

A senha padrão fica no Worker como secret `RPG_DEFAULT_PASSWORD`. Não salve a senha real dentro do HTML.

