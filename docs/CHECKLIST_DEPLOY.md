# Checklist de Deploy

## Git

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git status
git add .
git commit -m "Atualizar base do jogo"
git push
```

## Worker/API

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler deploy
```

## Testes rápidos

API ping:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/ping
```

Site:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=latest
```

## Senha padrão

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler secret put RPG_DEFAULT_PASSWORD
npx wrangler deploy
```

Senha atual desejada:

```txt
JOGADOR
```

## Testar senha via PowerShell

```powershell
$headers = @{
  "x-rpg-password" = "JOGADOR"
  "x-player-id" = "teste"
  "x-campaign-id" = "ghosts-of-saltmarsh"
}

Invoke-RestMethod `
  -Uri "https://ficharpg.gabrielgpsgyn.workers.dev/api/characters?campaignId=ghosts-of-saltmarsh" `
  -Headers $headers
```
