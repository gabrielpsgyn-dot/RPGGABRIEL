# V37 — Mobile uso real

## O que foi corrigido

- Removi o passo a passo da tela da ficha.
- Corrigi a área de ataques para celular.
- Adicionei lista de armas.
- Adicionei cards de ataques cadastrados.
- Adicionei lista de ataques disponíveis.
- Inventário ganhou botão direto: Sincronizar recebidos.
- Adicionar item manual ficou recolhido.
- Tabela de ataque não domina mais o celular.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v37_mobile_uso_real.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Ajustar ficha para uso real no celular V37"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=37
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=37
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=37
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=37
```
