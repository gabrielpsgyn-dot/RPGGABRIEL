# V41 — Correção `c is not defined`

## Erro

Console:

```txt
Uncaught ReferenceError: c is not defined
```

## Causa

A configuração global `WEAPON_PRESETS` estava chamando:

```js
hasWeaponProficiency(c,name)
```

Mas nesse ponto o personagem ativo `c` ainda não existe.

## Correção

A configuração voltou a ser estática:

```js
proficient:true
```

A proficiência real continua sendo calculada somente no momento do uso da arma, dentro das funções que já recebem o personagem ativo.

## Observação

Os avisos abaixo não são a causa da tela quebrada:

- aviso do campo de senha fora de form;
- Sentry de extensão do navegador;
- favicon 401.
