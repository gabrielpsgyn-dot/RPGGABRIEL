# V27 — Livro de Regras do Gabriel

## O que muda

- Nova tela: `livro-regras.html`
- Base oficial do livro do Gabriel.
- Cadastro completo de classes, raças, antecedentes, talentos, armas, armaduras, equipamentos, condições, magias e regras gerais.
- Status por regra: pendente, revisado, aprovado, igual ao livro.
- Texto completo permitido, porque o livro é do usuário.
- A ficha passa a usar classes, raças, antecedentes e talentos cadastrados no Livro de Regras.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v27_livro_regras_revisor.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar livro de regras revisavel V27"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=27
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=27
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=27
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=27
```
