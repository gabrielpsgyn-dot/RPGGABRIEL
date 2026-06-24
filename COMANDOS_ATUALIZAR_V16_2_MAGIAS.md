# V16.2 - Espaços usados compactos e dados por espaço

## O que muda

- Na aba Magias, o antigo quadro de círculos não mostra mais Total + várias linhas vazias.
- Agora aparece apenas um controle compacto de **Espaços usados** por círculo.
- Ao escolher o espaço de uma magia, o sistema mostra os **dados que serão usados**.
- Sai o texto "Espaço mínimo".
- Exemplo: ao trocar Bola de Fogo de 3º para 5º, a prévia mostra os dados do espaço escolhido.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Melhorar uso de espacos e dados das magias V16.2"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16_2
```

Na aba Magias:
- abra uma magia escolhida;
- altere o campo "Usar como";
- a linha de resultado muda para os dados daquele espaço.
