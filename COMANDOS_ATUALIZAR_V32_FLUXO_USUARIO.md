# V32 — Fluxo do usuário + inventário como fonte única

## O que foi corrigido

- Criado painel “Fluxo da ficha”.
- Separado modo criação e modo jogo.
- Equipamento e ouro recebidos por antecedente/classe/raça vão para o Inventário.
- Antecedente não duplica equipamento na tela.
- Tesouros da aba História viraram legado; tesouro real fica no Inventário.
- Progressão da classe ficou menos redundante.
- Inventário é a fonte única de itens, equipamento, tesouro e ouro.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v32_fluxo_usuario_inventario_unificado.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Organizar fluxo do usuario e inventario unico V32"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=32
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=32
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=32
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=32
```
