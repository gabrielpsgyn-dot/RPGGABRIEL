# Deploy — CSS único vigente

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_vigente_css_unico_real.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Consolidar CSS unico vigente e corrigir avatar da selecao"
git push

cd .\worker
npx wrangler deploy
```
