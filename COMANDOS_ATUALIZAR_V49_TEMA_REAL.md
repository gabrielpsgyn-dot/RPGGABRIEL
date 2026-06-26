# V49 — Tema Marítimo Sombrio Real

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v49_tema_maritimo_sombrio_real.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Forcar tema maritimo sombrio real V49"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=49
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=49
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=49
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=49
```

## Importante

Teste com Ctrl+F5 ou janela anônima para evitar cache visual antigo.
