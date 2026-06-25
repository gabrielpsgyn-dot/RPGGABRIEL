# V40 — Corrigir lista de personagens sumindo

## O que foi corrigido

- A lista de personagens agora renderiza antes dos painéis pesados.
- Cada painel roda protegido por safe render.
- Se inventário/armas/magias falharem, a lista de personagens continua aparecendo.
- Boot inicial protegido.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v40_corrige_lista_personagens.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir lista de personagens com safe render V40"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=40
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=40
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=40
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=40
```
