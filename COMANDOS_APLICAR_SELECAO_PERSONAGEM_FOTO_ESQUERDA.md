# Aplicar ajuste — seleção do personagem

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_vigente_selecao_personagem_foto_esquerda.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar foto pequena na selecao de personagem"
git push

cd .\worker
npx wrangler deploy
```
