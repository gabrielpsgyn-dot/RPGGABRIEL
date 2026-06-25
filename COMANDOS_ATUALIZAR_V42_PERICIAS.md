# V42 — Perícias compactas

## O que mudou

- Perícias não ficam mais separadas em caixas por atributo.
- Cada perícia fica em uma linha, estilo ficha.
- Atributo fica à direita da linha.
- Menos espaço entre perícias.
- Melhor para celular.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v42_pericias_compactas.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Compactar pericias estilo ficha V42"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=42
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=42
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=42
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=42
```
