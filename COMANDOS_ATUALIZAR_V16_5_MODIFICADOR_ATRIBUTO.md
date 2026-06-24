# V16.5 - Modificador de atributo automático

## O que mudou

A ficha agora aplica diretamente a regra do D&D para modificador de atributo:

```txt
Modificador = piso((Atributo - 10) / 2)
```

Exemplos:

```txt
8 ou 9   = -1
10 ou 11 = +0
12 ou 13 = +1
14 ou 15 = +2
16 ou 17 = +3
18 ou 19 = +4
20 ou 21 = +5
```

## Na tela

Antes o modificador podia ser digitado manualmente.

Agora:

- O jogador digita apenas o valor do atributo.
- O modificador aparece automaticamente.
- Salvaguardas usam esse modificador automático.
- Perícias usam esse modificador automático.
- Dados antigos em `modificadorManual` são ignorados.

## Cálculos

```txt
Salvaguarda = modificador do atributo + proficiência, se marcada.

Perícia = modificador do atributo vinculado + proficiência, se marcada.
```

## Como subir

Extraia este ZIP dentro da pasta base:

```txt
C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git
```

Depois rode:

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

git add -A
git commit -m "Aplicar modificador automatico de atributo V16.5"
git push

cd .\worker
npx wrangler deploy
```

## Testar

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=16_5
```

Teste rápido:

- Força 10 deve mostrar +0.
- Destreza 16 deve mostrar +3.
- Sabedoria 8 deve mostrar -1.
