# Atualizar o index.html do RPGGABRIEL

## 1. Extraia este ZIP

Extraia o conteúdo na pasta base do projeto:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois confirme que ficou assim:

```txt
public/index.html
public/_headers
```

## 2. Subir para o Git

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git status
git add .\public\index.html .\public\_headers
git commit -m "Substituir index por ficha limpa V11"
git push
```

## 3. Publicar no Cloudflare Worker

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler deploy
```

## 4. Testar

Abra:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=11
```

## 5. Senha

A senha configurada no Worker deve ser:

```txt
JOGADOR
```

Caso precise redefinir:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler secret put RPG_DEFAULT_PASSWORD
npx wrangler deploy
```
