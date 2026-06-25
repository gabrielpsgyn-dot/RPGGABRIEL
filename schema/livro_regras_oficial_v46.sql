-- V46 - Livro oficial / Guia do Mestre
-- Regra de confiança: official_book_only = 1.
-- Este schema guarda índice estruturado e fontes, não copia o livro integral.

CREATE TABLE IF NOT EXISTS fontes_oficiais (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  arquivo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'ativo',
  official_book_only INTEGER NOT NULL DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regras_oficiais (
  id TEXT PRIMARY KEY,
  fonte_id TEXT NOT NULL,
  parte TEXT,
  capitulo TEXT,
  titulo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  pagina_livro_inicio INTEGER,
  pagina_livro_fim_aprox INTEGER,
  confirmado_no_livro INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'indexado',
  alvo_sistema_json TEXT,
  implementacao TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (fonte_id) REFERENCES fontes_oficiais(id)
);

CREATE TABLE IF NOT EXISTS lacunas_fontes_oficiais (
  id TEXT PRIMARY KEY,
  modulo TEXT NOT NULL,
  motivo TEXT NOT NULL,
  acao TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'aguardando_fonte',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT OR REPLACE INTO fontes_oficiais (id,titulo,arquivo,tipo,status,official_book_only)
VALUES ('guia_mestre_v46','Guia do Mestre','dd-5e-guia-do-mestre-biblioteca-elfica.pdf','guia_mestre','ativo',1);

INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("intro_mestre",'guia_mestre_v46',"Introdução","Introdução","O Mestre / Como usar este livro","orientacao_mestre",4,5,1,"indexado","[\"mesa_mestre\", \"documentacao\"]","Base conceitual da Mesa do Mestre; não gera ficha do jogador.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("conheca_jogadores",'guia_mestre_v46',"Introdução","Introdução","Conheça seus jogadores","perfil_jogadores",6,8,1,"indexado","[\"mesa_mestre\", \"sessao_zero\"]","Pode virar cadastro de preferências do grupo: atuação, exploração, combate, otimização, resolução de problemas e história.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("mundo_amplo_panorama",'guia_mestre_v46',"Parte 1","Capítulo 1","Seu próprio mundo / Premissas principais","campanha_mundo",9,9,1,"indexado","[\"config_campanha\"]","Configura premissas de mundo, magia, deuses, selvagem, antiguidade, conflito e tom.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("deuses_panteoes",'guia_mestre_v46',"Parte 1","Capítulo 1","Deuses, panteões e sistemas religiosos","religiao",10,13,1,"indexado","[\"config_campanha\", \"faccao\", \"piedade\"]","Estrutura para divindades, domínios, panteões, piedade e relação com classes divinas sem preencher divindades como regra de personagem.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("mapa_campanha",'guia_mestre_v46',"Parte 1","Capítulo 1","Mapeando sua campanha","mapa_campanha",14,14,1,"indexado","[\"mesa_mestre\", \"mapas\"]","Suporte a escalas de província, reino e continente; útil para módulo de mapas do mestre.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("assentamentos",'guia_mestre_v46',"Parte 1","Capítulo 1","Assentamentos","assentamento",15,20,1,"indexado","[\"mesa_mestre\", \"npcs\", \"locais\"]","Gerador/cadastro de vila, cidade, metrópole, governo, comércio, defesas e organizações.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("idiomas_dialetos",'guia_mestre_v46',"Parte 1","Capítulo 1","Idiomas e dialetos","idioma_campanha",21,21,1,"indexado","[\"livro_regras\", \"personagem\"]","Pode adicionar idiomas regionais/secretos ao Livro de Regras; não substitui idiomas de raça sem fonte própria.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("faccoes_renome",'guia_mestre_v46',"Parte 1","Capítulo 1","Facções, organizações e renome","faccao",21,22,1,"indexado","[\"mesa_mestre\", \"personagem\", \"recompensas\"]","Cadastrar facções, objetivos, patentes, renome, benefícios e perda de renome.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("magia_no_mundo",'guia_mestre_v46',"Parte 1","Capítulo 1","Magia no seu mundo","magia_campanha",23,24,1,"indexado","[\"config_campanha\", \"livro_regras\"]","Configurar raridade/regulação da magia, escolas, organizações mágicas e restrições de conjuração.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("campanha_eventos",'guia_mestre_v46',"Parte 1","Capítulo 1","Criando campanha e eventos de campanha","campanha_eventos",25,33,1,"indexado","[\"mesa_mestre\", \"notas\"]","Estrutura de cidade sede, região local, aventura inicial, eventos mundiais, calendário e estágios.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("estilo_estagios_fantasia",'guia_mestre_v46',"Parte 1","Capítulo 1","Estilo de jogo, estágios e estilos de fantasia","estilo_campanha",34,42,1,"indexado","[\"sessao_zero\", \"mesa_mestre\"]","Configurar tom da campanha e estágio: heróis locais, reino, mestres do reino, mestres do mundo.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("multiverso_planos",'guia_mestre_v46',"Parte 1","Capítulo 2","Criando um multiverso e planos","plano_existencia",43,70,1,"indexado","[\"config_campanha\", \"mapas\"]","Cadastro de planos, viagens planares, planos interiores/exteriores e mundos conhecidos.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("aventuras",'guia_mestre_v46',"Parte 2","Capítulo 3","Criando aventuras","aventura",71,88,1,"indexado","[\"mesa_mestre\", \"preparacao_sessao\"]","Elementos de aventura, tipos, complicações, encontros e encontros aleatórios.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("pdms",'guia_mestre_v46',"Parte 2","Capítulo 4","Criando personagens do mestre","pdm",89,98,1,"indexado","[\"mesa_mestre\", \"npcs\"]","Planejamento de PdMs, contatos, serviçais, extras, vilões e opções de classes vilanescas.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("ambientes",'guia_mestre_v46',"Parte 2","Capítulo 5","Ambientes de aventuras","ambiente",99,124,1,"indexado","[\"mesa_mestre\", \"mapas\", \"encontros\"]","Masmorras, ambiente selvagem, assentamentos, ambientes incomuns e armadilhas.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("entre_aventuras",'guia_mestre_v46',"Parte 2","Capítulo 6","Entre aventuras","downtime",125,132,1,"indexado","[\"mesa_mestre\", \"calendario\"]","Conectar aventuras, monitorar campanha, despesas recorrentes e atividades em tempo livre.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("tesouros",'guia_mestre_v46',"Parte 2","Capítulo 7","Tesouros, itens mágicos, artefatos e recompensas","tesouro_item_magico",133,235,1,"indexado","[\"inventario\", \"mesa_mestre\", \"recompensas\"]","Estrutura para tesouro, item mágico, item inteligente, artefato e recompensa especial. Textos completos devem ficar como referência, não duplicação.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("conduzindo_jogo",'guia_mestre_v46',"Parte 3","Capítulo 8","Conduzindo o jogo","regras_mesa",236,263,1,"indexado","[\"mesa_mestre\", \"rolagens\"]","Regras da mesa, dados, valores de habilidade, exploração, interação social, objetos, combate, perseguições, armas de cerco, doenças, venenos, loucura e XP.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("oficina_mestre",'guia_mestre_v46',"Parte 3","Capítulo 9","Oficina do Mestre","opcoes_regra",264,290,1,"indexado","[\"criador\", \"livro_regras\"]","Opções de habilidade, aventura, combate, criar monstro, magia, item mágico e novas opções de personagem.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("masmorras_aleatorias",'guia_mestre_v46',"Apêndice","Apêndice A","Masmorras aleatórias","gerador_masmorra",291,302,1,"indexado","[\"mesa_mestre\", \"mapas\"]","Tabelas de áreas, passagens, portas, câmaras, escadas, conexões e preenchimento.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("lista_monstros",'guia_mestre_v46',"Apêndice","Apêndice B","Lista de monstros","indice_monstro",303,314,1,"indexado","[\"mesa_mestre\", \"encontros\"]","Índice de monstros por referência; fichas completas exigem Manual dos Monstros ou fonte própria cadastrada.");
INSERT OR REPLACE INTO regras_oficiais (id,fonte_id,parte,capitulo,titulo,tipo,pagina_livro_inicio,pagina_livro_fim_aprox,confirmado_no_livro,status,alvo_sistema_json,implementacao) VALUES ("mapas_apendice",'guia_mestre_v46',"Apêndice","Apêndice C","Mapas","mapas",315,320,1,"indexado","[\"mesa_mestre\", \"mapas\"]","Mapas de apoio para mestre; não gera regras de personagem.");
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_01',"classes_jogador","O próprio Guia do Mestre aponta o Livro do Jogador como fonte das regras que os jogadores precisam para criar personagens.","Aguardar Livro do Jogador ou livro autoral oficial do Gabriel.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_02',"racas_linhagens_jogador","Não é o escopo principal do Guia do Mestre.","Aguardar fonte oficial de raças/linhagens.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_03',"equipamento_inicial_por_classe","O Guia do Mestre tem diretrizes de equipamento inicial em níveis elevados, mas não substitui equipamento inicial normal de classe.","Aguardar fonte oficial da classe/equipamento.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_04',"antecedentes_padrao_completos","O Guia do Mestre orienta criação/ajuste, mas não é a fonte principal da lista completa de antecedentes.","Aguardar fonte oficial.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_05',"lista_completa_armas_armaduras_com_precos","Não é o escopo deste PDF como fonte principal de equipamentos mundanos.","Aguardar fonte oficial.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_06',"magias_jogador_lista_completa","Existe arquivo de magias separado no projeto, mas este PDF não é a fonte principal das listas de classe.","Usar pacote de magias já extraído ou enviar fonte oficial de magias.",'aguardando_fonte');
INSERT OR REPLACE INTO lacunas_fontes_oficiais (id,modulo,motivo,acao,status) VALUES ('lacuna_07',"manual_monstros_fichas_completas","O Guia do Mestre tem lista/índice e criação de monstros, mas fichas completas exigem Manual dos Monstros ou fonte própria.","Aguardar fonte oficial de monstros.",'aguardando_fonte');