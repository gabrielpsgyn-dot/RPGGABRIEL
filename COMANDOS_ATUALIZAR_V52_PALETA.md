# V52 — Paleta marítima equilibrada

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v52_paleta_maritima_equilibrada.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar paleta maritima equilibrada V52"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=52
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=52
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=52
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=52
```
