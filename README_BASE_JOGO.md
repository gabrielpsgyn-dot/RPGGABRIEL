# Base do Jogo — RPGGABRIEL

Este pacote deve ficar na **pasta base do jogo/repositório**.

Objetivo: documentar a campanha, manter prompts prontos para evoluir o sistema, evitar perda de contexto e orientar deploy no Git/Cloudflare.

## Campanha

- Nome: **Ghosts of Saltmarsh**
- Núcleo narrativo próprio: Saltmarsh, Thalassyr, segredos costeiros, corrupção crescente e pistas escondidas.
- Mecânica própria extra: **Corrupção**.
- Fluxo da ficha online:
  1. jogador abre o site;
  2. clica no personagem;
  3. digita a senha padrão da mesa;
  4. entra na ficha;
  5. ficha salva localmente e tenta sincronizar online.

## Estrutura recomendada

```txt
/
├─ public/
│  └─ index.html
├─ worker/
│  ├─ worker.js
│  └─ wrangler.toml
├─ schema/
│  └─ schema-d1-rpg.sql
├─ docs/
│  ├─ ROADMAP_JOGO.md
│  ├─ CONTEXTO_CAMPANHA.md
│  └─ CHECKLIST_DEPLOY.md
├─ prompts/
│  ├─ PROMPT_01_BASE_JOGO.md
│  ├─ PROMPT_02_FICHA_ONLINE_UIX.md
│  ├─ PROMPT_03_API_CLOUDFLARE_D1.md
│  ├─ PROMPT_04_CORRECAO_UTF8.md
│  ├─ PROMPT_05_TESTES_MOBILE.md
│  └─ PROMPT_06_MESTRE_CAMPANHA.md
├─ GAME_CONTEXT.json
├─ .editorconfig
├─ .gitattributes
└─ README_BASE_JOGO.md
```

## Regra importante

A ficha pode ser inspirada em D&D, mas deve manter identidade própria visual e narrativa do projeto.
