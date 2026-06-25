# V38 — Corrigir inventário e lista de armas

## O que foi corrigido

- A lista de armas agora renderiza na abertura da ficha.
- Ataques disponíveis aparecem.
- Inventário agora renderiza na abertura da ficha.
- Botão “Sincronizar recebidos” agora funciona.
- Botão “Adicionar arma” agora funciona.
- Botão “Adicionar item” agora funciona.
- Descanso curto/longo continuam funcionando por clique.
- Talentos e proficiências voltaram a renderizar.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v38_corrige_inventario_armas_mobile.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir renderizacao de inventario e armas V38"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=38
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=38
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=38
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=38
```
