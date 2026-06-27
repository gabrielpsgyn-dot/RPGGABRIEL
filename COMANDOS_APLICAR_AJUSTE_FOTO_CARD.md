# Aplicar ajuste da foto pequena no card

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_vigente_foto_pequena_card_personagem.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar miniatura do personagem na lista vigente"
git push

cd .\worker
npx wrangler deploy
```
