# V48 — Tema Marítimo Sombrio

## Como atualizar

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v48_tema_maritimo_sombrio.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Aplicar tema maritimo sombrio V48"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=48
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=48
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=48
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=48
```
