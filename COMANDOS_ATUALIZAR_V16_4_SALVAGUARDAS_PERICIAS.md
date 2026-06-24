# V16.4 - Salvaguardas e perícias vinculadas

## O que muda

Na aba Ficha:

- Salvaguardas agora mostram a fórmula de cálculo.
- Cada salvaguarda mostra as perícias ligadas ao mesmo atributo.
- Perícias foram agrupadas por atributo:
  - Força
  - Destreza
  - Constituição
  - Inteligência
  - Sabedoria
  - Carisma

## Regra usada

```txt
Modificador = piso((atributo - 10) / 2)

Salvaguarda = modificador do atributo + bônus de proficiência, se marcada.

Perícia = modificador do atributo vinculado + bônus de proficiência, se a perícia estiver marcada.
```

Importante:

```txt
Salvaguarda e perícia são proficiências diferentes.
Marcar Salvaguarda de Destreza não marca Acrobacia, Furtividade ou Prestidigitação automaticamente.
Elas apenas usam o mesmo atributo base.
```

## Vínculos

- Força: Atletismo
- Destreza: Acrobacia, Furtividade, Prestidigitação
- Constituição: nenhuma perícia padrão
- Inteligência: Arcanismo, História, Investigação, Natureza, Religião
- Sabedoria: Adestrar Animais, Lidar com Animais, Intuição, Medicina, Percepção, Sobrevivência
- Carisma: Atuação, Enganação, Intimidação, Persuasão

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Vincular salvaguardas e pericias por atributo V16.4"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16_4
```
