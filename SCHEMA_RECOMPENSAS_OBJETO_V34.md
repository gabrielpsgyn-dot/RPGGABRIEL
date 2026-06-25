# V34 — Recompensas como objetos

## Regra

Toda recompensa do livro deve ser objeto.

## Objeto fixo

Use quando o personagem sempre ganha aquilo.

```json
{
  "tipo": "item",
  "nome": "Espada curta",
  "quantidade": 1,
  "peso": 1,
  "categoria": "arma",
  "origem": "classe",
  "modo": "fixo"
}
```

Resultado: entra direto no inventário.

## Objeto moeda

```json
{
  "tipo": "moeda",
  "nome": "Ouro inicial",
  "moeda": "po",
  "quantidade": 15,
  "origem": "antecedente",
  "modo": "fixo"
}
```

Resultado: soma em PO.

## Objeto escolha

Use apenas quando o livro realmente manda escolher.

```json
{
  "tipo": "escolha",
  "nome": "Escolher Círculo Druídico",
  "opcoes": ["Círculo do Fogo", "Círculo da Lua"],
  "origem": "classe",
  "modo": "escolha"
}
```

Resultado: aparece em escolhas pendentes.

## Correção importante

Se no seu livro a arma é fixa, não deve existir texto tipo “Escolher arma”.
Deve existir um objeto fixo de item.
