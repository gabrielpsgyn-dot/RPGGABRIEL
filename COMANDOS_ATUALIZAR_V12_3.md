# Atualizar RPGGABRIEL para V12.3

Mudança:
- Nível ganhou botões - e +.
- Corrupção ganhou botões - e +.
- Nível fica limitado entre 1 e 20.
- Corrupção fica limitada entre 0 e 10.
- Mantém a melhoria anterior da Vida atual.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Adicionar botoes de nivel e corrupcao"
git push

cd .\worker
npx wrangler deploy
```

Teste:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=12_3
```
