# V33 — Motor de progressão, recompensas e caminhos

## Correção principal

Inventário não pode depender do usuário copiar texto. Classe, raça e antecedente precisam gerar objetos.

## O que entrou

- Caminho/subclasse na ficha.
- Exemplo: Druida pode escolher Círculo da Terra, Lua, Fogo ou personalizado.
- Recompensas por nível:
  - habilidades;
  - equipamentos;
  - magias/grimório;
  - escolhas pendentes.
- Inventário é sincronizado automaticamente a partir de:
  - antecedente;
  - raça;
  - classe;
  - recompensas de nível;
  - caminho/subclasse.
- Ouro em texto, como “15 po”, vira moeda do inventário.
- Escolhas como “arma à escolha” viram pendência, não item falso.

## Observação

A estrutura agora existe dentro do sistema. O conteúdo exato do livro do Gabriel deve ser cadastrado no Livro de Regras para substituir/completar os modelos.
