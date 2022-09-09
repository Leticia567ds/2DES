DROP DATABASE IF EXISTS locacoes;
CREATE DATABASE locacoes charset=UTF8 collate utf8_general_ci;

USE locacoes;

create table usuarios(
    cod integer not null primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(20) not null,
    telefone varchar(20) not null
);


CREATE TABLE filmes(
     cod_filmes integer not null primary key ,
     nome varchar(50) not null,
     endereco varchar(20) not null
);

CREATE TABLE locacao(
     id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
       cod integer not null,
       cod_filmes integer not,
      multa FLOAT(5, 2)not null,
      data_locacao DATE not null,
      data_devolucao DATE  not null
);

describe usuarios;
describe filmes;
describe locacao;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/Prova/back/docs/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/Prova/back/docs/movies.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/Prova/back/docs/locacao.csv'
INTO TABLE locacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from usuarios;
select * from filmes;
select * from locacao;
