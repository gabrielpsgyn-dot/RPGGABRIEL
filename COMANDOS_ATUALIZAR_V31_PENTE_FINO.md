# V31 — Pente fino da ficha inicial

## O que foi revisado

- Removidas redundâncias entre raça, antecedente e proficiências.
- Removida conferência do livro da ficha inicial do jogador.
- Personalidade movida para a aba História.
- Proficiências e idiomas agrupados em um painel único.
- Talentos vazios simplificados.
- Inventário continua por objetos.
- Campos manuais ficam recolhidos.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v31_pente_fino_ficha.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Revisar ficha inicial e remover redundancias V31"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=31
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=31
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=31
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=31
```
