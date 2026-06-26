# V48 — Tema Marítimo Sombrio

## Objetivo

Aplicar identidade visual marítima sombria na ficha online, mantendo legibilidade e uso em celular.

## Conceito visual

- mar profundo;
- porto decadente;
- madeira molhada;
- latão envelhecido;
- mapa náutico antigo;
- névoa costeira;
- clima sombrio de Saltmarsh.

## Arquivo criado

`public/css/tema-maritimo-sombrio.css`

## Arquivos com tema aplicado

- `public/index.html`
- `public/mestre.html`
- `public/livro-regras.html`
- `public/criador.html`

## Como foi aplicado

Cada página recebeu:

```html
<link rel="stylesheet" href="./css/tema-maritimo-sombrio.css?v=48">
```

e o body recebeu a classe:

```html
<body class="tema-maritimo-sombrio">
```

Na ficha principal, preserva também `menu-open` quando existir.
