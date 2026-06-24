# V15.1 - Correção do erro /api/magias 500

## Causa mais provável

O banco D1 já tinha uma tabela `magias` antiga, de outro formato.

O SQL anterior usava `CREATE TABLE IF NOT EXISTS`, então ele não recriou a tabela.
Resultado: o Worker procurava colunas novas como `nome_pt` e `descricao_pt`, mas a tabela antiga não tinha essas colunas.

Por isso `/api/magias?limit=80` dava erro 500.

## O que este pacote corrige

- Adiciona `schema/magias_ptbr_pdf_schema_seed_RESET.sql`
- Esse SQL apaga apenas as tabelas/views de magias.
- Não apaga personagens.
- Recria as magias PT-BR manuais.
- Atualiza `worker/worker.js` com rota `/api/magias-status`.

## Como aplicar

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Rode primeiro o RESET das magias:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

npx wrangler d1 execute ghosts_saltmarsh_rpg --file=.\schema\magias_ptbr_pdf_schema_seed_RESET.sql
```

Depois suba o Worker e os arquivos:

```powershell
git add -A
git commit -m "Corrigir schema manual de magias V15.1"
git push

cd .\worker
npx wrangler deploy
```

## Testar

Status:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/magias-status
```

Página do mestre:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=15_1
```

API de magias:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/magias?limit=5
```

Observação:
A API de magias exige a senha da mesa pelo header `x-rpg-password`.
Na página do mestre isso já é enviado depois que você digita a senha.
