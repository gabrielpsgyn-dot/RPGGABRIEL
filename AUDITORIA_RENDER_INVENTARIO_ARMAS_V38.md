# V38 — Correção real de renderização

## Erro encontrado

A V37 criou os componentes de armas e inventário, mas a ficha não chamava:

- renderAttacks()
- renderInventory()
- renderFeats()
- renderProficiencySummary()
- renderRollLog()

Por isso a lista de armas e o inventário não apareciam mesmo existindo no HTML.

## Corrigido

- renderForm agora renderiza ataques, inventário, talentos, proficiências e rolagens.
- Botões agora têm eventos:
  - Adicionar arma;
  - Adicionar ataque manual;
  - Sincronizar recebidos;
  - Adicionar item;
  - Converter texto antigo;
  - Descanso curto/longo;
  - Adicionar talento;
  - Adicionar proficiência.
- Lista de armas mostra contador de armas disponíveis.
- Inventário mostra orientação se não houver recompensa fixa cadastrada.

## Observação

Se a classe/raça não tiver equipamento fixo cadastrado no Livro de Regras, o inventário não inventa item. Ele mostra vazio até a regra existir.
