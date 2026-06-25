# V34 — Recompensas como objetos

## Correção

Você está certo: recompensa não pode ser texto solto.
Agora o sistema diferencia:

- objeto fixo;
- objeto moeda;
- objeto magia;
- objeto habilidade;
- objeto escolha.

## Regra nova

Se o livro dá algo fixo, entra direto como objeto.
Se o livro manda escolher, vira escolha pendente.

## Exemplo fixo

```json
{"tipo":"item","nome":"Espada curta","quantidade":1,"origem":"classe","modo":"fixo"}
```

## Exemplo escolha

```json
{"tipo":"escolha","nome":"Escolher Círculo Druídico","opcoes":["Fogo","Lua"],"modo":"escolha"}
```

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v34_recompensas_por_objeto.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Transformar recompensas em objetos V34"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=34
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=34
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=34
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=34
```
