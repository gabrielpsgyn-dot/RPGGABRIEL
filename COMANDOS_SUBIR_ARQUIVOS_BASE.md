# Comandos para subir estes arquivos na pasta base do jogo

## 1. Copiar os arquivos

Extraia o ZIP na pasta base do jogo:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

A pasta deve ficar com:

```txt
docs/
prompts/
GAME_CONTEXT.json
README_BASE_JOGO.md
.editorconfig
.gitattributes
```

## 2. Subir para o Git

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git status
git add .\docs .\prompts .\GAME_CONTEXT.json .\README_BASE_JOGO.md .\.editorconfig .\.gitattributes .\COMANDOS_SUBIR_ARQUIVOS_BASE.md
git commit -m "Adicionar base documental e prompts do jogo"
git push
```

## 3. Deploy do Worker, se tiver alterado frontend ou API

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler deploy
```

## 4. Testar online

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=base
```

## 5. Testar API

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/ping
```
