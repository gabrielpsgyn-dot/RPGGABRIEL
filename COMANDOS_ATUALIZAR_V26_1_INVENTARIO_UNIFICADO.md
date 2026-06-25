# V26.1 — Inventário unificado

## Correção

A V24 tinha criado itens estruturados, mas o personagem já tinha inventário antigo em texto.
Agora os dois ficam no mesmo painel.

## O que muda

- Inventário antigo continua no campo de texto.
- Itens estruturados ficam abaixo, no mesmo painel.
- Botão: importar linhas do inventário antigo para itens.
- Botão: atualizar texto com os itens cadastrados.
- Nada do inventário antigo é apagado.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v26_1_inventario_unificado.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Unificar inventario antigo e estruturado V26.1"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=26_1
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=26_1
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=26_1
```
