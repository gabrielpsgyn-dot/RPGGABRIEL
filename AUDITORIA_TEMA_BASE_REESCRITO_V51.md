# V51 — Tema marítimo com CSS base reescrito

## Problema

As versões V48, V49 e V50 não mudaram os painéis bege da ficha no navegador do usuário.

## Correção real desta versão

Além de injetar CSS no fim do `<head>`, a V51 reescreve diretamente as cores antigas do CSS base:

- `--paper`
- `--paper2`
- `--ink`
- fundos hardcoded bege;
- fundos hardcoded brancos;
- `.name-box`;
- `.header-fields`;
- `.panel`;
- `.dash`;
- inputs;
- barras;
- botões;
- tabs.

## Prova visual

Foi adicionado um selo fixo no canto inferior direito:

`V51 MARÍTIMO`

Se esse selo não aparecer, o navegador/Cloudflare ainda não está servindo a V51.
