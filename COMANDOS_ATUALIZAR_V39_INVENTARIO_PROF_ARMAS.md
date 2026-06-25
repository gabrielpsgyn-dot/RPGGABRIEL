# V39 — Inventário, proficiência e armas

## O que mudou

- Ataques disponíveis agora vêm apenas das armas que o personagem possui no inventário.
- A lista geral de armas serve para adicionar arma ao inventário, não para atacar direto.
- Proficiência é calculada por classe/raça/proficiência manual.
- Proficiência soma no ataque, não no dano.
- Pergaminho entra no inventário como item consumível.
- Item consumível/pergaminho tem botão Usar.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v39_inventario_prof_armas.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir inventario proficiencia e uso de armas V39"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=39
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=39
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=39
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=39
```
