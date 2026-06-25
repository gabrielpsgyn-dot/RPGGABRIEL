# V27.2 — Mobile sem corte

## Correção

A V27.1 tirou a faixa lateral, mas cortou conteúdo que ultrapassava.
A V27.2 corrige isso.

## O que muda

- Não corta mais conteúdo interno dos painéis.
- Painéis e textareas podem crescer normalmente.
- Tabelas grandes passam a ter rolagem horizontal própria.
- A ficha continua ajustada ao celular sem faixa escura lateral.
- Mantém Livro de Regras, Criador e Inventário Unificado.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v27_2_mobile_scroll_fix.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir corte de conteudo no mobile V27.2"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=27_2
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=27_2
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=27_2
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=27_2
```
