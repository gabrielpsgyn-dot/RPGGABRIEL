# V46 - Revisão oficial do Guia do Mestre

## Regra de trabalho

Sem achismo.

A partir desta revisão, a ficha deve aceitar como oficial apenas regra com fonte cadastrada. O PDF enviado agora é o **Guia do Mestre**. Ele é excelente para a Mesa do Mestre, criação de campanha, tesouros, itens mágicos, regras opcionais, encontros, armadilhas, PdMs, ambientes e condução do jogo.

Ele **não** é a fonte principal para preencher automaticamente classe, raça, antecedentes, equipamento inicial normal de classe, lista completa de armas/armaduras e progressão de personagem do jogador.

## Arquivos gerados

- `data/regras_guia_mestre_v46.json`
- `data/status_fontes_oficiais_v46.json`
- `schema/livro_regras_oficial_v46.sql`

## O que entrou como fonte indexada

- Introdução e papel do Mestre
- Conheça seus jogadores
- Mundo, deuses, panteões, assentamentos, idiomas, facções, magia e campanha
- Multiverso e planos
- Aventuras, encontros e complicações
- Personagens do Mestre
- Ambientes, masmorras, assentamentos, selvagem e armadilhas
- Entre aventuras e tempo livre
- Tesouros, itens mágicos, artefatos e recompensas
- Conduzindo o jogo
- Oficina do Mestre
- Masmorras aleatórias
- Lista de monstros como índice
- Mapas

## Lacunas que NÃO podem ser inventadas

- Classes de jogador completas
- Raças / linhagens completas
- Equipamento inicial normal de cada classe
- Antecedentes padrão completos
- Lista completa de armas/armaduras mundanas
- Fichas completas de monstros
- Progressão completa de classe por nível

## Decisão técnica

O sistema deve usar `official_book_only = true`.

Se a classe, raça, antecedente ou item não tiver fonte oficial cadastrada, o sistema deve mostrar:

> Fonte oficial ausente. Cadastre no Livro de Regras.

e não deve criar item, proficiência ou habilidade automática.

## Próximo passo correto

Enviar o Livro do Jogador / livro autoral oficial de criação de personagens, ou o arquivo exato que contém classes, raças, antecedentes, armas, equipamentos e progressão. Só depois disso eu preparo as regras de personagem sem achismo.
