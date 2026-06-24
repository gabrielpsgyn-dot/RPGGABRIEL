# Prompt — Testes mobile da ficha online

Teste o fluxo principal em celular.

Fluxo esperado:
1. Abrir `https://ficharpg.gabrielgpsgyn.workers.dev`.
2. Ver tela inicial legível.
3. Clicar em um personagem.
4. Digitar senha `JOGADOR`.
5. Entrar na ficha.
6. Ver dashboard no topo:
   - Vida
   - Nível
   - Corrupção
   - Imagem
7. Alterar um campo.
8. Salvar.
9. Reabrir a página.
10. Confirmar que o dado local não foi perdido.

Testes visuais:
- Sem texto claro sobre fundo claro.
- Sem texto escuro sobre fundo escuro.
- Sem campos altos demais.
- Sem espaços verticais exagerados.
- Abas legíveis.
- Botões fáceis de tocar.
- Atributos com botões `-` e `+` legíveis.
- Sem caracteres quebrados.

Testes de API:
- `/api/ping` responde ok.
- `/api/characters` com senha responde ok.
- `/api/characters` sem senha responde 401.
