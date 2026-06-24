# Atualizar RPGGABRIEL para V15 Magias SRD

## O que entra

- Integra o importador de magias SRD no Worker principal `ficharpg`.
- Adiciona banco de magias no D1.
- Adiciona rotas:
  - `/admin/import-magias-srd?token=SEU_TOKEN&dry=1`
  - `/admin/import-magias-srd?token=SEU_TOKEN`
  - `/admin/magias-status`
  - `/api/magias`
  - `/api/magias/:slug`
- Página do mestre ganha painel **Banco de magias SRD** com busca por nome, nível, classe e tipo de uso.

## 1. Extrair ZIP

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

## 2. Aplicar SQL no D1

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

npx wrangler d1 execute ghosts_saltmarsh_rpg --file=.\schema\rpg_magias_schema_v3.sql
```

## 3. Criar token secreto do importador

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git\worker"

npx wrangler secret put ADMIN_IMPORT_TOKEN
```

Digite uma senha/token forte, por exemplo:

```txt
IMPORTAR-MAGIAS-2026
```

## 4. Subir Git e deploy

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Adicionar banco e importador de magias V15"
git push

cd .\worker
npx wrangler deploy
```

## 5. Testar importador sem gravar

Troque `SEU_TOKEN` pelo token que você digitou:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/admin/import-magias-srd?token=SEU_TOKEN&dry=1
```

## 6. Importar gravando

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/admin/import-magias-srd?token=SEU_TOKEN
```

## 7. Ver status

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/admin/magias-status
```

## 8. Testar página do mestre

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=15
```

Senha da mesa:

```txt
JOGADOR
```
