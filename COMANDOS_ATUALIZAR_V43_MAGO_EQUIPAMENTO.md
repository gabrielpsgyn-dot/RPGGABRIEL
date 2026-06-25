# V43 — Mago equipamento inicial

## O que mudou

- Mago nível 1 agora recebe Grimório fixo no inventário.
- Mago nível 1 agora tem escolha de arma inicial: Cajado ou Adaga.
- A escolha cria item no inventário.
- Depois a arma aparece em Ataques disponíveis.
- Também foi adicionada escolha de foco arcano ou bolsa de componentes.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v43_mago_equipamento_inicial.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar equipamento inicial do mago V43"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=43
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=43
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=43
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=43
```
