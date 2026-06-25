# V45 — Livro oficial + Mesa do Mestre refeita

## Livro oficial

A partir desta versão, os equipamentos genéricos de template não são tratados como oficiais na ficha.

Foi ativada a trava:

```js
const OFFICIAL_BOOK_ONLY = true;
```

Isso significa:

- se a regra não estiver no Livro de Regras, o sistema não deve fingir que é oficial;
- templates ficam apenas como apoio de estrutura;
- o conteúdo exato deve vir do livro do Gabriel.

## Mesa do Mestre nova

A mesa foi refeita pensando no uso real do mestre no celular:

- tela principal com selecionado atual;
- PV, CA, iniciativa e condições na mão;
- botões grandes de dano/cura;
- turnos por rodada;
- lista de jogadores;
- inimigos e NPCs locais;
- notas rápidas;
- busca e filtros.

## Objetivo

Durante a sessão o mestre precisa de:

1. quem está no turno;
2. PV atual;
3. aplicar dano/cura;
4. condições;
5. CA/iniciativa;
6. magias visíveis;
7. notas rápidas.

O resto fica fora da frente.
