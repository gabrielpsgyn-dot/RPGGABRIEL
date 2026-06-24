# Importador de Magias SRD para RPG Online

Este pacote cria a estrutura do banco e um importador automático para preencher as magias SRD em um banco Cloudflare D1.

## Arquivos

- `rpg_magias_schema_completo_v2.sql`  
  Cria as tabelas de magias, uso por espaço, escala de truques, classes, espaços de personagem e log.

- `worker_import_magias_srd.js`  
  Worker para buscar as magias SRD em JSON e gravar no D1.

## Importante

Este pacote NÃO copia o site brasileiro inteiro. Ele usa uma base SRD aberta em JSON.  
Magias fora do SRD, de livros pagos ou de traduções específicas, devem ser cadastradas manualmente ou importadas a partir de uma fonte/licença que você tenha direito de usar.

## Como aplicar o SQL

```bash
wrangler d1 execute SEU_BANCO --file=./rpg_magias_schema_completo_v2.sql
```

## Como configurar o Worker

No `wrangler.toml`, tenha algo como:

```toml
name = "rpg-magias-importer"
main = "worker_import_magias_srd.js"
compatibility_date = "2026-06-24"

[[d1_databases]]
binding = "DB"
database_name = "SEU_BANCO"
database_id = "SEU_DATABASE_ID"
```

Crie o token:

```bash
wrangler secret put ADMIN_IMPORT_TOKEN
```

Depois faça deploy:

```bash
wrangler deploy
```

## Como importar as magias

Teste sem gravar:

```text
https://SEU_WORKER.workers.dev/admin/import-magias-srd?token=SEU_TOKEN&dry=1
```

Importar gravando no banco:

```text
https://SEU_WORKER.workers.dev/admin/import-magias-srd?token=SEU_TOKEN
```

Ver status:

```text
https://SEU_WORKER.workers.dev/admin/magias-status
```

## O que ele grava

Tabela `magias`:

- nome
- slug
- nível
- escola
- tempo de conjuração
- alcance
- componentes
- duração
- concentração
- ritual
- descrição
- tipo de uso
- ataque mágico ou não
- resistência ou não
- atributo de resistência
- soma da rolagem
- tipo de dano

Tabela `magia_uso_espaco`:

- espaço usado
- fórmula de dado
- soma
- tipo de resultado
- tipo de dano
- quantidade de alvos
- quantidade de projéteis

Tabela `magia_escala_personagem`:

- nível mínimo do personagem
- fórmula do dado
- tipo de resultado
- tipo de dano

Tabela `magia_classes`:

- vínculo da magia com Bardo, Clérigo, Druida, Paladino, Patrulheiro, Feiticeiro, Bruxo ou Mago.

## Revisão manual

O importador tenta detectar automaticamente:

- dano
- cura
- resistência
- ataque mágico
- dado base
- escala por espaço
- escala de truque

Mesmo assim, recomendo revisar principalmente magias de utilidade, invocação, ilusões e magias com efeitos muito específicos.
