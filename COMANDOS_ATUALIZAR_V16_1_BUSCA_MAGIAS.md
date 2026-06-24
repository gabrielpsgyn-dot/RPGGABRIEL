# V16.1 - Busca de magias abre e fecha

## O que muda

- O bloco de busca de magias agora inicia fechado.
- Botão "Abrir busca" / "Fechar busca".
- As magias filtradas ficam dentro do bloco expansível.
- Ao adicionar uma magia ao personagem, a busca fecha automaticamente.
- A lista "Magias escolhidas" fica mais limpa e ocupa a tela principal.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Melhorar busca de magias colapsavel V16.1"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16_1
```

Na aba Magias:
- clique em Abrir busca;
- filtre a magia;
- adicione ao personagem;
- a busca fecha e a magia aparece em Magias escolhidas.
