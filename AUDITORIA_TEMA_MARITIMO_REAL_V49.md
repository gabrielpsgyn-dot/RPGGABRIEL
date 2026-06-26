# V49 — Tema Marítimo Sombrio Real

## Problema da V48

A V48 carregava o CSS do tema antes do `<style>` interno da ficha.

Resultado: o HTML continuava usando as cores antigas porque o CSS interno vinha depois e sobrescrevia o tema.

## Correção

- O CSS do tema agora é carregado no final do `<head>`, depois dos estilos internos.
- O CSS recebeu seletores mais fortes.
- Foram aplicados `!important` nos pontos necessários.
- O tema agora muda fundo, painéis, inputs, botões, abas, perícias, inventário, ataques, magias e mesa do mestre.

## Arquivo principal

`public/css/tema-maritimo-sombrio.css`

## Páginas atualizadas

- `public/index.html`
- `public/mestre.html`
- `public/livro-regras.html`
- `public/criador.html`
