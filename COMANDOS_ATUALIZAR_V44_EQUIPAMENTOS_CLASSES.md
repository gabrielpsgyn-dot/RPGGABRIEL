# V44 — Equipamentos iniciais para todas as classes

## O que mudou

- Equipamento inicial não é mais só do Mago.
- Criada estrutura para todas as classes.
- Cada classe pode ganhar item fixo ou escolha que cria item.
- Mago continua com Grimório fixo e escolha de Cajado/Adaga.
- Adicionado arquivo auxiliar:
  `data/equipamentos_iniciais_classes_v44.json`

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v44_equipamentos_todas_classes.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Generalizar equipamentos iniciais por classe V44"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=44
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=44
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=44
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=44
```
