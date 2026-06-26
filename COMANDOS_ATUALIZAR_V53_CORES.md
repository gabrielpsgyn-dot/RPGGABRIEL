# V53 — Correção das cores erradas

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v53_corrige_cores_salvaguardas.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir cores de salvaguardas e chips V53"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=53
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=53
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=53
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=53
```
