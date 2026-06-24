# V17 - Mesa medieval com ordem de jogar

## O que muda

- A área de combate foi refeita: menos cor ruim, mais medieval/pergaminho/madeira.
- A área de combate ficou mais útil:
  - alvo selecionado;
  - HP/corrupção;
  - dano/cura/definir HP;
  - condições;
  - botão Próximo turno;
  - botão Anterior;
  - botão Nova rodada.
- Criado ranking de ordem de jogar por iniciativa.
- O turno ativo fica destacado.
- Jogadores, inimigos e NPCs continuam separados.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v17_mestre_medieval_turnos.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Refazer mesa do mestre medieval com ordem de turnos V17"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=17
```
