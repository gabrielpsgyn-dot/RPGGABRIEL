# Atualizar RPG Gabriel — Versão Vigente

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v56_versao_vigente_unica.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Consolidar projeto em versao vigente unica"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=vigente
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=vigente
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=vigente
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=vigente
```
