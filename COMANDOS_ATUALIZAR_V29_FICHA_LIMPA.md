# V29 — Ficha limpa, sem duplicação e sem campos vazios

## Correção

A tela estava misturando:
- inventário antigo
- inventário estruturado
- talentos vazios
- campos que pareciam ser obrigação do jogador preencher
- áreas do mestre junto da ficha do jogador

## O que muda

- Proficiências e idiomas agora são resumo automático por classe, raça e antecedente.
- Campo manual de proficiências fica recolhido.
- Talentos vazios não ficam parecendo erro.
- Adicionar talento fica recolhido.
- Inventário volta a ser um inventário principal em texto.
- Controle de peso e itens estruturados ficam recolhidos.
- Conferência do livro/regras fica recolhida como área do mestre.
- Menos informação duplicada na ficha do jogador.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v29_ficha_limpa_sem_duplicacao.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Limpar ficha do jogador sem duplicacao V29"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=29
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=29
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=29
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=29
```
