# Prompt — Corrigir UTF-8

Problema:
A interface apresentou caracteres quebrados como:
- `padrÃ£o`
- `nÃ£o`
- `marÃ©`
- `corrupÃ§Ã£o`
- `â‰ˆ`
- `â†`
- `âˆ’`

Objetivo:
Corrigir todos os textos quebrados e garantir UTF-8.

Regras:
- Salvar arquivos como UTF-8 sem BOM.
- Manter `<meta charset="utf-8">`.
- Evitar símbolos especiais quando não forem necessários.
- Preferir textos simples:
  - `-` no lugar de `−`
  - `Personagens` no lugar de seta
  - remover `≈`
- Não alterar lógica da ficha junto com a correção de UTF-8.

Arquivos a verificar:
- `public/index.html`
- `worker/worker.js`
- `README.md`
- arquivos em `docs/`
- arquivos em `prompts/`

Critérios de aceite:
- Não existe `Ã`, `â`, `�` visível na tela.
- Textos com acento aparecem corretamente.
