# V45 — Mesa do Mestre nova + trava de Livro Oficial

## O que mudou

- Refeita a Mesa do Mestre pensando no uso real do mestre em celular.
- Adicionado painel “Agora na mesa”.
- Botões grandes de turno, dano, cura e condições.
- Lista de jogadores, inimigos e NPCs mais simples.
- Aba de turnos.
- Aba de notas rápidas.
- Inimigos e NPCs locais.
- A ficha agora tem trava para não tratar template como regra oficial:
  `OFFICIAL_BOOK_ONLY = true`

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v45_mesa_mestre_nova.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Refazer mesa do mestre e travar livro oficial V45"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=45
https://ficharpg.gabrielgpsgyn.workers.dev/?v=45
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=45
```
