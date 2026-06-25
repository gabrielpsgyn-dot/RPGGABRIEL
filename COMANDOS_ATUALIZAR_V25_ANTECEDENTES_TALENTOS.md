# V25 — Antecedentes no sistema + Talentos / Feitos

## O que muda

- Antecedentes definidos como base do sistema.
- Antecedentes aplicam perícias automaticamente.
- Antecedentes mostram idiomas, ferramentas, equipamento inicial e característica.
- Botão para aplicar equipamento inicial do antecedente no inventário.
- Nova área de Talentos / Feitos.
- Talentos podem ser adicionados e removidos.
- Talentos ficam salvos no personagem.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v25_antecedentes_talentos.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar antecedentes do sistema e talentos V25"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=25
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=25
```
