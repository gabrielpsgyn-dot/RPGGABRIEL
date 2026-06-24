# Atualizar RPGGABRIEL para V12.1

Correção:
- Resolve erro: Cannot set properties of null (setting 'onclick') no bindEvents.
- O erro acontecia porque o botão printBtn foi removido, mas o JavaScript ainda tentava ligar onclick nele.
- Mantém a barra Vida / Nível / Corrupção no topo.
- Mantém a aba JSON removida.
- Mantém o botão pequeno Salvar online.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Corrigir erro JS da ficha V12 mobile"
git push

cd .\worker
npx wrangler deploy
```

Teste:

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=12_1
```
