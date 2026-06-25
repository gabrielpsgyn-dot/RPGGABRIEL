# V36 — Campos contextuais por classe

## O que foi corrigido

- Campo de caminho/subclasse não aparece genericamente para todo mundo.
- Mago vê Tradição Arcana quando for nível adequado.
- Bruxo vê Patrono, Invocações e Dádiva do Pacto quando for o caso.
- Druida vê Círculo Druídico.
- As escolhas pendentes agora podem ter seletor ou campo de texto.
- Escolhas genéricas não ficam jogadas como texto sem ação.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v36_campos_contextuais.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar campos contextuais por classe V36"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=36
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=36
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=36
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=36
```
