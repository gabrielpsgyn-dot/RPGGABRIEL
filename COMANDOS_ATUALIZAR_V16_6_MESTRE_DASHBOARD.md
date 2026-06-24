# V16.6 - Nova tela do mestre em modo mesa

## Objetivo

A tela do mestre antiga ficava ruim porque mostrava uma lista lateral e só um personagem por vez.

A V16.6 muda para visão de mesa:

- todos os personagens aparecem ao mesmo tempo;
- cada personagem vira um card;
- cada card mostra informações básicas necessárias;
- detalhes ficam recolhidos e podem ser abertos por personagem;
- ações rápidas ficam no próprio card;
- estrutura visual já separa jogadores de inimigos/NPCs para a próxima fase.

## O que aparece em cada card

- Nome do personagem
- Jogador
- Classe
- Nível
- Raça
- HP atual/máximo
- Corrupção
- CA
- Iniciativa
- Deslocamento
- Percepção passiva
- Maré/facção/marcado pela maré
- Quantidade de magias

## Ações rápidas por personagem

- Dano -1
- Dano -5
- Cura +1
- Cura +5
- Dano personalizado
- Cura personalizada
- Definir HP atual
- Recarregar personagem

## Detalhes recolhidos

Ao abrir o card:

- informações rápidas;
- magias;
- campanha e pistas;
- notas úteis.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Melhorar tela do mestre em visao de mesa V16.6"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=16_6
```
