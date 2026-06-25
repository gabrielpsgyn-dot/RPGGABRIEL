# PROMPT V46 - Importação sem achismo do Livro Oficial

Use somente regras encontradas em fontes cadastradas.

## Entrada esperada
PDF/HTML/TXT oficial.

## Saída esperada
Para cada regra:
- id
- tipo
- nome
- fonte_arquivo
- pagina_livro_inicio
- trecho_curto_referencia
- confirmado_no_livro: true
- status: aprovado | pendente | ambiguo
- aplica_em: ficha | mesa_mestre | criador | inventario | magias | campanha
- objeto_resultante

## Proibição
Não completar com D&D padrão se a regra não estiver no arquivo enviado.
Não transformar template em regra oficial.
Não criar equipamento inicial de classe sem fonte.
