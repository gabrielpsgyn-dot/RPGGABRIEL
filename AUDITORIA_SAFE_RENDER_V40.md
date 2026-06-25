# V40 — Safe render da lista de personagens

## Problema

A V39 estava com risco de uma falha em algum painel novo impedir a renderização geral.
Quando isso acontece, a lista de personagens parece sumir.

## Correção

- A lista de personagens agora renderiza primeiro.
- Cada painel da ficha roda protegido por `safeCall`.
- Se inventário/armas/magias derem erro, a lista de personagens continua aparecendo.
- O boot inicial também ficou protegido:
  - renderStatic
  - loadStore
  - renderMenu
  - bindEvents
  - renderForm
  - refreshOnline
  - startOnlineSync

## Resultado

Mesmo que exista bug em um painel específico, a tela inicial não fica branca e a lista de personagens não desaparece.
