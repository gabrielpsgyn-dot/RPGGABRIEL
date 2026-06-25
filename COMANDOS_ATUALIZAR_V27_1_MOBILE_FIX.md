# V27.1 — Correção da tela mobile

## Correção

A tela estava estourando largura no celular, criando faixa escura lateral e cortando os painéis.

## O que muda

- Remove overflow horizontal.
- Corrige largura da ficha no mobile.
- Corrige topbar fixa.
- Faz painéis, textareas e grids respeitarem a largura da tela.
- Mantém inventário unificado, criador e livro de regras.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v27_1_mobile_layout_fix.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir layout mobile da ficha V27.1"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=27_1
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=27_1
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=27_1
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=27_1
```
