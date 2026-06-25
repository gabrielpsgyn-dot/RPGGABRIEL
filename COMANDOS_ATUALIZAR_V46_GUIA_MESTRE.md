# V46 - Regras do Guia do Mestre sem achismo

## O que foi preparado

- Índice estruturado do Guia do Mestre
- Status de fontes oficiais
- Schema SQL para regras oficiais
- Relatório de lacunas
- Trava: regra só entra se tiver fonte oficial

## Arquivos principais

```txt
data/regras_guia_mestre_v46.json
data/status_fontes_oficiais_v46.json
schema/livro_regras_oficial_v46.sql
docs/RELATORIO_REVISAO_GUIA_MESTRE_V46.md
prompts/PROMPT_V46_IMPORTAR_LIVRO_OFICIAL_SEM_ACHISMO.md
```

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v46_regras_guia_mestre_oficial.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Preparar regras oficiais do Guia do Mestre V46"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=46
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=46
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=46
```
