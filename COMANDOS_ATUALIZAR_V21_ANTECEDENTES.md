# V21 — Raça compacta + Antecedentes
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v21_antecedentes_compacto.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "V21 compactar raca e adicionar antecedentes"
git push

cd .\worker
npx wrangler deploy
