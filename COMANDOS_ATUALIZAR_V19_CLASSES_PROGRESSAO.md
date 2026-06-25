# V19 - Banco de classes e progressão por nível

## O que muda

A ficha agora entende a classe escolhida e aplica automaticamente:

- dado de vida da classe;
- salvaguardas proficientes da classe;
- atributo de conjuração;
- tipo de conjuração;
- espaços de magia pelo nível;
- painel informativo de habilidades por nível.

## Exemplos

```txt
Mago nível 1:
Dado de vida: d6
Salvaguardas: Inteligência e Sabedoria
Atributo de conjuração: Inteligência
Espaços: 2 espaços de 1º círculo
```

```txt
Paladino nível 1:
Dado de vida: d10
Salvaguardas: Sabedoria e Carisma
Sem espaços de magia no nível 1
```

```txt
Paladino nível 2:
Espaços: 2 espaços de 1º círculo
```

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v19_classes_progressao.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar banco de classes e progressao V19"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=19
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=19
```

## Conferência rápida

1. Escolha Classe = Mago e Nível = 1.
2. Deve aparecer d6, salvaguardas Inteligência/Sabedoria, atributo mágico Inteligência e 2 espaços de 1º círculo.
3. Mude para Nível = 5.
4. Deve aparecer espaços 1º:4, 2º:3, 3º:2.
5. Escolha Classe = Paladino e Nível = 1.
6. Deve aparecer sem espaços de magia.
7. Mude Paladino para Nível = 2.
8. Deve aparecer 2 espaços de 1º círculo.
