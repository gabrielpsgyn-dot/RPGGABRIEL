# V16.7 - Tela do mestre com painel único de dano

## O que mudou

A tela do mestre foi refeita para ficar mais limpa e funcional.

### Dano e cura agora ficam em um único local

Não existe mais botão de dano em todos os personagens.

Agora o fluxo é:

```txt
1. Clica no card do personagem.
2. Ele vira o alvo selecionado.
3. No painel superior, escolhe o valor.
4. Aplica dano, cura ou define HP.
```

### Cards de personagens

Todos os personagens aparecem ao mesmo tempo em cards, com informação básica:

- nome;
- jogador;
- classe;
- nível;
- raça;
- HP;
- corrupção;
- CA;
- iniciativa;
- deslocamento;
- percepção passiva;
- maré/facção;
- quantidade de magias.

### Detalhes separados

Ao selecionar um personagem, o painel lateral mostra:

- informações de combate;
- campanha;
- magias;
- pistas/notas.

### Preparado para inimigos e NPCs

A página já tem uma área separada de "Inimigos e NPCs" para receber depois:

- HP;
- CA;
- iniciativa;
- condições;
- dano rápido;
- detalhes de combate.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Refazer tela do mestre com painel unico de dano V16.7"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=16_7
```
