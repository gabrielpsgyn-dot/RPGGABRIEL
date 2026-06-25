# V20 - Banco de Raças e Linhagens

## O que muda

A ficha agora entende a raça/linhagem escolhida e mostra automaticamente:

- tamanho;
- deslocamento;
- visão no escuro;
- idiomas;
- resistências;
- proficiências raciais;
- traços raciais;
- observações de aplicação.

## Aplicações automáticas

Algumas proficiências raciais são marcadas automaticamente quando a raça possui regra direta:

```txt
Elfo → Percepção
Meio-Orc → Intimidação
Goliath → Atletismo
Tabaxi → Furtividade e Percepção
Orc → Intimidação
```

O deslocamento também é aplicado automaticamente quando a raça muda.

## Como subir

```powershell
cd "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git"

Expand-Archive "$env:USERPROFILE\Downloads\rpggabriel_v20_racas_linhagens.zip" -DestinationPath "C:\Users\gabri\Documents\RPG\ghosts-saltmarsh-ficha-online-v5-git" -Force

git add -A
git commit -m "Adicionar banco de racas e linhagens V20"
git push

cd .\worker
npx wrangler deploy
```

## Teste

```txt
https://ficharpg.gabrielgpsgyn.workers.dev/?v=20
https://ficharpg.gabrielgpsgyn.workers.dev/mestre.html?v=20
```

## Conferência rápida

```txt
Raça = Elfo
→ Tamanho Médio
→ Deslocamento 9m
→ Visão no escuro 18m
→ Idiomas Comum e Élfico
→ Percepção marcada automaticamente

Raça = Anão
→ Deslocamento 7,5m
→ Resistência a Veneno

Raça = Tabaxi
→ Furtividade e Percepção marcadas automaticamente
```
