# V32 — Revisão pensando como usuário

## Problema real

O usuário cria a ficha e depois usa em jogo. A tela estava misturando essas duas fases.

## Decisão

A ficha inicial agora tem um fluxo:

1. Criação da ficha
2. Uso em jogo

## Fonte única

- Equipamento fica no Inventário.
- Ouro fica no Inventário.
- Equipamento recebido por antecedente/classe/raça é sincronizado para o Inventário.
- Antecedente não lista equipamento duplicado; apenas informa que foi para o Inventário.
- Tesouros na aba História viraram legado, porque tesouro também é inventário.

## Resultado esperado

O jogador sabe o que fazer:
- preencher identidade;
- escolher classe, raça, antecedente;
- conferir atributos/PV;
- usar inventário, ataques e magias no jogo.
