# V54 — Acabamento visual final

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v54_acabamento_visual_final.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar acabamento visual maritimo V54"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=54
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=54
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=54
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=54
```
