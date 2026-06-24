# Atualizar RPGGABRIEL para V12 Mobile

## O que muda

- Barra de Vida / Nível / Corrupção passa a ser a primeira tira da ficha.
- Remove a aba JSON da interface.
- Deixa só um botão pequeno: Salvar online.
- Melhora a visualização mobile dos atributos.
- Melhora fonte, tamanho e espaçamento dos atributos no celular.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Aplicar ficha V12 mobile"
git push

cd .\worker
npx wrangler deploy
```

Teste:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=12
```
