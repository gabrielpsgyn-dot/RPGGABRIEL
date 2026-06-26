# V51 — Tema marítimo com CSS base reescrito

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v51_tema_maritimo_css_base_reescrito.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Reescrever CSS base para tema maritimo V51"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=51
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=51
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=51
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=51
```

## Validação visual

Procure o selo no canto inferior direito:

`V51 MARÍTIMO`

Se o selo não aparecer, você ainda está vendo versão/cache antigo.
