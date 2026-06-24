# V16.9 - Mesa do mestre mais RPG

## Novidades

- cards ficaram mais com cara de RPG / pergaminho;
- separação melhor entre **Jogadores / Inimigos / NPCs**;
- área de combate mais bonita;
- condições rápidas no alvo selecionado: **Envenenado, Caído, Concentrando, Invisível**;
- botão **Detalhes** continua funcional;
- inimigos e NPCs podem ser adicionados localmente no painel do mestre.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v16_9_mestre_rpg_boards.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Melhorar mesa do mestre visual e separar jogadores inimigos npcs V16.9"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=16_9
```
