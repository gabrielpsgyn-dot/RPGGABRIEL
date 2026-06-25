# V22 + V23 + V24 — Combate, descanso e inventário

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v22_23_24_combate_descanso_inventario.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar ataques descanso e inventario V22 V23 V24"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=24
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=24
```
