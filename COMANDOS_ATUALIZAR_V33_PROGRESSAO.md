# V33 — Progressão, recompensas e caminhos de classe

## O que foi corrigido

- Inventário não fica esperando texto manual.
- Classe, raça, antecedente e nível geram objetos para inventário.
- Ouro como `15 po` vira moeda no inventário.
- Escolhas como arma à escolha viram pendências, não item falso.
- Adicionado campo Caminho/Subclasse.
- Exemplo: Druida pode escolher Círculo da Terra, Lua, Fogo ou personalizado.
- A progressão mostra:
  - ganho do nível atual;
  - equipamento que entra no inventário;
  - magias/grimório;
  - escolhas pendentes.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v33_progressao_recompensas.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar motor de progressao recompensas e caminhos V33"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=33
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=33
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=33
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=33
```
