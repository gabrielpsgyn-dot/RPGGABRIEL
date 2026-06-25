# V35 — Resolver escolhas pendentes

## O que foi corrigido

Agora a escolha pendente não fica só como aviso.

Exemplo do Mago:

- Classe: Mago
- Nível: 2
- Pendência: Escolher Tradição Arcana
- A ficha mostra um seletor
- Ao aplicar, salva em `classeInfo.subclasse`
- A pendência some

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v35_resolver_escolhas_classe.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Resolver escolhas pendentes de classe V35"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=35
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=35
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=35
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=35
```
