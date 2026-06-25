# V18 - Motor de regras da ficha

## O que muda

A ficha agora calcula automaticamente as regras principais:

- modificador do atributo;
- bônus de proficiência pelo nível;
- salvaguardas;
- perícias;
- iniciativa;
- sabedoria passiva;
- CD de magia;
- ataque mágico.

## Regras aplicadas

```txt
Modificador = piso((atributo - 10) / 2)

Bônus de proficiência:
Nível 1-4   = +2
Nível 5-8   = +3
Nível 9-12  = +4
Nível 13-16 = +5
Nível 17-20 = +6

Salvaguarda = modificador do atributo + proficiência se marcada
Perícia = modificador do atributo + proficiência se marcada
Iniciativa = modificador de Destreza
Sabedoria passiva = 10 + Percepção
CD de magia = 8 + proficiência + modificador do atributo de conjuração
Ataque mágico = proficiência + modificador do atributo de conjuração
```

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v18_motor_regras_ficha.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Aplicar motor de regras da ficha V18"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=18
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=18
```

## Conferência rápida

- Nível 1 deve mostrar proficiência +2.
- Nível 5 deve mostrar proficiência +3.
- Destreza 16 deve mostrar iniciativa +3.
- Sabedoria 14 com Percepção marcada no nível 1 deve mostrar sabedoria passiva 14.
- Inteligência 16 como atributo de conjuração no nível 1 deve mostrar CD 13 e ataque mágico +5.
