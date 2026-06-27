# Fix real — avatar pequeno na seleção

## Problema

A correção anterior dependia do `tema-vigente.css`. Na tela publicada, o HTML novo entrou, mas o CSS externo não venceu/cacheou nessa parte. Por isso a imagem continuou grande.

## Correção aplicada

Agora o tamanho da imagem foi travado em dois pontos:

1. diretamente no HTML gerado pelo `renderMenu()`;
2. em um bloco CSS crítico inline dentro do `index.html`.

Assim a imagem da seleção fica sempre como avatar pequeno, mesmo se o CSS externo estiver em cache.

## Escopo

Apenas a tela de seleção antes de entrar na ficha.
A imagem grande dentro da ficha não foi alterada.
