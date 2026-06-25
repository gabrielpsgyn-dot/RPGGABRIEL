# V28 — Progressão da classe compacta + tela otimizada

## Correção

A progressão da classe estava ocupando muito espaço e deixando a ficha pesada.

## O que muda

- Progressão da classe agora é compacta.
- Mostra só o essencial direto:
  - dado de vida
  - bônus de proficiência
  - salvaguardas
  - conjuração
  - atributo mágico
  - atributos fortes
- Habilidades do nível atual ficam em destaque.
- Progressão completa e espaços de magia ficam recolhidos em “Ver espaços de magia e progressão completa”.
- Reduz altura de painéis e campos grandes.
- Melhora aproveitamento dos espaços da ficha.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v28_classe_tela_otimizada.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Otimizar progressao da classe e tela da ficha V28"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=28
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=28
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=28
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=28
```
