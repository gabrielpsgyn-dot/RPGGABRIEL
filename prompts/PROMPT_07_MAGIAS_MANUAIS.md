# Prompt — Magias manuais PT-BR

Contexto:
- Não usar importador automático.
- Não buscar magias em site externo.
- As magias foram enviadas pelo usuário em arquivos próprios.
- O cadastro deve ser feito uma vez pelo SQL manual `schema/magias_ptbr_pdf_schema_seed.sql`.

Regras:
1. Preservar as tabelas `magias`, `magia_classes`, `magia_uso_espaco` e `magia_escala_personagem`.
2. A página do mestre deve apenas consultar o banco.
3. Não criar rota de importação externa.
4. Não usar ADMIN_IMPORT_TOKEN.
5. Se precisar corrigir uma magia, gerar SQL pontual de UPDATE/INSERT.
6. Confirmar licença/autorização antes de publicar conteúdo de terceiros fora do uso privado da mesa.
