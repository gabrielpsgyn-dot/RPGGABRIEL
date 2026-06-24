# Prompt para evoluir V15 Magias

Contexto: o projeto RPGGABRIEL já tem página do mestre, ficha do jogador, Worker Cloudflare, D1 e banco de magias SRD.

Objetivo da próxima etapa:
- Vincular magias do banco `magias` aos personagens em `personagem_magias`.
- Permitir o mestre adicionar/remover magia do personagem.
- Permitir o jogador escolher magias conhecidas/preparadas a partir do banco.
- Mostrar dados de rolagem por espaço usado a partir de `magia_uso_espaco`.
- Mostrar escala de truque a partir de `magia_escala_personagem`.

Regras:
- Não quebrar a ficha atual.
- Manter long-polling por mudança do personagem.
- Manter senha padrão JOGADOR.
- Não copiar conteúdo de site brasileiro protegido; usar base SRD ou cadastro manual autorizado.
