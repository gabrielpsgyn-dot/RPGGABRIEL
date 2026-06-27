# Deploy — fix real do avatar pequeno

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_vigente_avatar_fix_real_inline.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir avatar pequeno na selecao de personagem"
git push

cd .\worker
npx wrangler deploy
```
