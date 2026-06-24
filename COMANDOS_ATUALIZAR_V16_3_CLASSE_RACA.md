# V16.3 - Classe e nível separados + filtro automático de magias

## O que muda

Na aba Ficha:

- Campo "Classe e nível" foi separado em:
  - Classe
  - Nível
- Raça/Linhagem agora tem lista sugerida, mas ainda permite digitar.
- O campo antigo `meta.classeNivel` continua sendo preenchido internamente para compatibilidade.

Na aba Magias:

- O filtro de Classe agora vem automaticamente pela classe do personagem.
- Exemplo:
  - Personagem classe Mago -> busca de magias abre filtrada por Mago.
  - Personagem classe Clérigo -> busca abre filtrada por Clérigo.
- A opção "Todas" continua existindo, basta selecionar manualmente.

Base futura:

- Adicionado `data/classes_racas_base_v16_3.json`
- Adicionado `prompts/PROMPT_08_CLASSES_RACAS_PROGRESSAO.md`

Esses arquivos deixam preparado o próximo passo:
habilidades por nível, espaços de magia por classe/nível, traços raciais etc.

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Separar classe nivel e raca com filtro automatico de magias V16.3"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16_3
```

Teste prático:

1. Aba Ficha.
2. Selecione Classe = Mago.
3. Vá na aba Magias.
4. Clique em Abrir busca.
5. O filtro de classe deve aparecer como Mago.
6. Se quiser ver tudo, troque para Todas.
