# Atualizar RPGGABRIEL para V15 Magias Manuais

## O que entra

- Usa o arquivo de magias que você enviou.
- Não tem importador automático.
- Não busca magia em site externo.
- Cadastra as magias uma vez no D1 com SQL.
- A página do mestre consulta o banco e lista as magias.

## Arquivos principais

```txt
public/index.html
public/mestre.html
worker/worker.js
schema/magias_ptbr_pdf_schema_seed.sql
docs/magias_ptbr_pdf_relatorio.md
docs/magias_ptbr_pdf_revisor.html
data/magias_ptbr_pdf_completo.json
data/magias_ptbr_pdf_resumo.csv
data/magias_ptbr_pdf_classes.csv
```

## 1. Extrair ZIP

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

## 2. Aplicar SQL no D1

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

npx wrangler d1 execute ghosts_saltmarsh_rpg --file=.\schema\magias_ptbr_pdf_schema_seed.sql
```

## 3. Subir Git e Worker

```powershell
git add -A
git commit -m "Adicionar magias manuais PT-BR V15"
git push

cd .\worker
npx wrangler deploy
```

## 4. Testar

Ficha:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=15
```

Página do mestre:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=15
```

API de magias:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/magias?limit=10
```

A API exige senha da mesa no header `x-rpg-password`.
Pela página do mestre isso já usa a senha digitada.
