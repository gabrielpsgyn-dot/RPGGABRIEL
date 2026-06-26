# V50 — Tema marítimo inline forçado

## Problema

Mesmo na V49, a ficha continuava visualmente igual em áreas importantes.

## Correção

Nesta versão o tema foi injetado diretamente no final do `<head>` de cada página, dentro de:

```html
<style id="tema-maritimo-sombrio-v50">
```

Assim ele fica depois dos estilos antigos e ganha prioridade.

## Páginas corrigidas

- `public/index.html`
- `public/mestre.html`
- `public/livro-regras.html`
- `public/criador.html`

## Resultado esperado

A ficha deve mudar visualmente de verdade:

- fundo escuro marítimo;
- painéis azul petróleo;
- bordas latão;
- inputs escuros;
- botões náuticos;
- abas e cards sem bege antigo.
