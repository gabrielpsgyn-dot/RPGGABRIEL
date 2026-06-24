# V17.1 - Mesa medieval compacta com iniciativa lateral

## O que mudou

- Reduzi a área de combate.
- A ordem de jogar agora fica do lado direito, compacta, ocupando pouco espaço.
- A iniciativa mostra só:
  - posição
  - nome
  - valor da iniciativa
- Visual ajustado para ficar mais medieval:
  - menos cor estranha;
  - madeira mais escura;
  - pergaminho mais envelhecido;
  - área de combate mais discreta.
- Mantidos:
  - próximo turno;
  - turno anterior;
  - nova rodada;
  - dano/cura/definir HP;
  - condições.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v17_1_mestre_compacto_medieval.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Compactar area de combate e iniciativa lateral V17.1"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=17_1
```
