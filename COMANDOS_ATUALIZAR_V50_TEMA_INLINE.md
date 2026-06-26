# V50 — Tema marítimo sombrio inline forçado

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v50_tema_maritimo_sombrio_inline.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Forcar tema maritimo sombrio inline V50"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=50
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=50
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=50
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=50
```

Use Ctrl+F5.
