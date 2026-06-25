# V43 — Equipamento inicial do Mago

## Resposta à dúvida

O Mago não estava recebendo cajado/adaga porque a regra de equipamento inicial da classe ainda não estava cadastrada como objeto.

## Correção

No nível 1 do Mago agora existem recompensas:

- Grimório: item fixo, entra direto no inventário.
- Escolher arma inicial de Mago: Cajado ou Adaga.
- Escolher foco arcano ou bolsa de componentes.
- Escolher pacote inicial.

## Regra importante

Se o livro do Gabriel disser que o Mago sempre ganha Cajado fixo, basta trocar a recompensa de escolha para item fixo:

```json
{"tipo":"item","nome":"Cajado","categoria":"arma","origem":"classe Mago","modo":"fixo"}
```

Se o livro disser que ele pode escolher, mantém como:

```json
{"tipo":"escolha_item","nome":"Escolher arma inicial de Mago","opcoes":["Cajado","Adaga"],"aplicaItem":true}
```

## Comportamento

Quando o jogador escolhe Cajado ou Adaga, o sistema cria o item no inventário.
Depois essa arma aparece em Ataques disponíveis.
