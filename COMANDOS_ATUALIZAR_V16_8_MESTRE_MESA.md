# V16.8 - Mesa do mestre com identidade visual de mesa

## O que mudou

- visual da tela do mestre foi refeito para parecer uma mesa de RPG, com madeira, pergaminho e tabuleiro central;
- cards dos personagens ficaram mais claros e legíveis;
- o painel lateral de detalhes ficou mais organizado;
- o botão **Detalhes** agora funciona corretamente;
- dano/cura continua em um único painel superior.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v16_8_mestre_mesa_visual.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Melhorar mesa do mestre visual e corrigir detalhes V16.8"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=16_8
```
