# Atualizar RPGGABRIEL para V14 Change Watch

## O que muda

- Remove a atualização fixa de 8 segundos.
- A ficha do jogador passa a usar uma rota de espera por mudança do personagem.
- A página do mestre salva a alteração online.
- A ficha do jogador só atualiza quando o Worker responder que houve mudança para aquele personagem.
- Página do mestre continua com botão Atualizar, sem ficar recarregando automático.

## Importante

Isso é "long-polling":
- o navegador do jogador abre uma requisição esperando mudança;
- o Worker responde quando a revisão do personagem muda;
- se não mudar, ele fecha depois de alguns segundos e a ficha abre outra espera.

Para push 100% instantâneo sem nenhuma espera, o próximo nível seria WebSocket + Durable Object.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Adicionar atualizacao por mudanca do personagem V14"
git push

cd .\worker
npx wrangler deploy
```

## Testar

Ficha do jogador:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=14
```

Página do mestre:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=14
```

## Teste prático

1. Abra a ficha do jogador e entre no personagem com senha `JOGADOR`.
2. Abra `/mestre.html?v=14` no computador.
3. Dê dano no personagem.
4. A ficha do jogador deve atualizar quando a rota de mudança responder, sem intervalo fixo de 8 segundos.
