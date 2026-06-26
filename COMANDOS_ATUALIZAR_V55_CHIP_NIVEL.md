# V55 — Corrigir chip do ganho do nível atual

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v55_corrige_chip_nivel_atual.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir chip do ganho do nivel atual V55"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=55
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=55
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=55
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=55
```
