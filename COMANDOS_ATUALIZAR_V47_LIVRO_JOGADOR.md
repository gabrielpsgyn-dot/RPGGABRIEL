# V47 — Livro do Jogador oficial sem achismo

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v47_livro_jogador_oficial_sem_achismo.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Aplicar Livro do Jogador oficial sem achismo V47"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=47
https://ficharpg.gabrielgpsgyn.workers.dev/livro-regras.html?v=47
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=47
```

## Testes obrigatórios

1. Criar Mago nível 1: deve aparecer escolha Bordão ou Adaga, Grimório fixo e foco/componentes.
2. Criar Bárbaro nível 1: deve aparecer Machado grande ou arma marcial corpo-a-corpo, arma secundária, pacote e 4 azagaias.
3. Criar Patrulheiro nível 1: deve aparecer armadura, duas espadas curtas ou armas simples, pacote, arco longo e flechas.
4. Selecionar Elfo da Floresta: deve dar proficiência em espada longa, espada curta, arco longo e arco curto.
5. A lista de armas deve mostrar só armas possuídas para criar ataque.
```
