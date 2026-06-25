# V26 — Criador de regras customizável

## O que muda

- Nova tela: `criador.html`
- Criar raça / linhagem personalizada.
- Criar antecedente personalizado.
- Criar talento / feito personalizado.
- Exportar/importar JSON das regras.
- A ficha passa a enxergar as regras customizadas salvas no navegador.
- Painel de conferência mostra se classe, raça e antecedente estão encontrados na base.
- Botão para reaplicar classe, raça e antecedente no personagem.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v26_criador_regras_customizavel.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar criador de regras customizavel V26"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=26
https://ficharpg.gabrielgpsgyn.workers.dev/criador.html?v=26
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=26
```
