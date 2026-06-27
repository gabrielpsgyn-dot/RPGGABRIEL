# CSS único vigente

Foi feita uma limpeza real:

- removidos todos os blocos `<style>` internos das páginas;
- removidos os CSS antigos;
- criado um único arquivo CSS oficial: `public/css/app-vigente.css`;
- todas as páginas apontam apenas para esse arquivo;
- o card da seleção de personagem foi corrigido para nunca exibir imagem grande;
- o avatar da seleção agora é gerado como `<img class="char-avatar-img" width="34" height="34">`.

## Arquivo CSS oficial

`public/css/app-vigente.css`

A partir daqui, ajuste visual deve ser feito somente nesse arquivo.
