# Atualizar RPGGABRIEL para V13 Mestre

## O que entra

- Nova página desktop para mestre: `public/mestre.html`
- Link "Página do Mestre" na tela inicial.
- Página do mestre lista todos os personagens online.
- Mostra vida, nível, corrupção, classe, raça, facção, maré e informações relevantes.
- Lista magias/truques cadastrados por personagem.
- Permite o mestre:
  - dar dano;
  - curar;
  - definir vida atual;
  - aumentar/diminuir nível;
  - aumentar/diminuir corrupção.
- A ficha do jogador passa a buscar atualização online a cada 8 segundos.
- Quando o mestre der dano e salvar, a ficha aberta do jogador atualiza sozinha.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Adicionar pagina do mestre V13"
git push

cd .\worker
npx wrangler deploy
```

## Testar

Ficha do jogador:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=13
```

Página do mestre:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=13
```

Senha:

```txt
JOGADOR
```

## Observação importante

A ficha do jogador precisa estar aberta e autenticada com a senha da mesa.
Ela verifica atualizações online a cada 8 segundos.
