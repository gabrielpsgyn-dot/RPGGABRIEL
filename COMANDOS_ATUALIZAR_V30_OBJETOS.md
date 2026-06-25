# V30 — Ficha por objetos

## Correção

Você estava certo: inventário e proficiências não podem ser texto solto.
A partir da V30, a ficha trabalha com objetos.

## O que muda

### Inventário
Cada item agora é objeto:

```txt
nome
quantidade
peso
categoria
origem
descrição
```

O texto antigo fica apenas em área técnica de migração.

### Proficiências e idiomas
Também viram objetos:

```txt
tipo
nome
origem
```

Exemplo:
```txt
tipo: perícia
nome: Percepção
origem: raça
```

### Tela
- O personagem não precisa preencher texto solto.
- A ficha mostra objetos vindos de classe, raça, antecedente e livro de regras.
- Duplicação reduzida.
- Texto antigo preservado só para conversão.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v30_ficha_por_objetos.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Transformar ficha em objetos estruturados V30"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=30
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=30
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=30
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=30
```
