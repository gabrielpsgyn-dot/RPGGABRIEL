# V16 - Grimório do personagem e uso de espaço de magia

## O que muda

- Corrige a impressão de que só existem 80 magias:
  - a API agora carrega até 500 por padrão;
  - o painel do mestre busca até 500.
- Na ficha do jogador, a aba Magias ganhou:
  - busca no banco de magias;
  - filtro por nível;
  - filtro por classe;
  - botão Adicionar magia ao personagem;
  - lista de magias escolhidas do personagem;
  - botão Usar magia;
  - consumo do espaço de magia escolhido.
- Truque não consome espaço.
- Magia de 1º a 9º consome espaço do círculo escolhido.
- A escolha e o uso da magia são salvos no JSON do personagem e sincronizados online.

## Arquivos

- public/index.html
- public/mestre.html
- worker/worker.js
- schema/magias_ptbr_pdf_schema_seed_RESET.sql
- COMANDOS_CORRIGIR_V15_1_MAGIAS.md
- COMANDOS_ATUALIZAR_V16_GRIMORIO.md

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Adicionar grimorio e uso de espacos de magia V16"
git push

cd .\worker
npx wrangler deploy
```

## Se as magias ainda não estiverem no D1

Rode uma vez:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

npx wrangler d1 execute ghosts_saltmarsh_rpg --remote --file ".\schema\magias_ptbr_pdf_schema_seed_RESET.sql"
```

## Testar

Ficha do jogador:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16
```

Página do mestre:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=16
```

Status das magias:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/api/magias-status
```

## Como usar

1. Abra a ficha do personagem.
2. Vá na aba Magias.
3. Busque uma magia no banco.
4. Clique em Adicionar.
5. Na lista "Magias escolhidas", escolha o espaço.
6. Clique em Usar magia.
7. O campo "Usados" do círculo é aumentado e a ficha salva online.
