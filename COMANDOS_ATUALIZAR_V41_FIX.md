# V41 — Corrigir erro `c is not defined`

## O que foi corrigido

- Corrigida a linha que quebrava o JavaScript:
  `proficient:hasWeaponProficiency(c,name)`
- `WEAPON_PRESETS` voltou a ser configuração estática.
- A proficiência continua sendo calculada na hora do ataque.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v41_corrige_c_undefined.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Corrigir erro c is not defined V41"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=41
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=41
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=41
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=41
```
