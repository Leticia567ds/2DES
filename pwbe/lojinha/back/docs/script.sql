DROP DATABASE IF EXISTS lojinhajapa;
CREATE DATABASE lojinhajapa charset=UTF8 collate utf8_general_ci;

USE lojinhajapa;

CREATE TABLE lancamento (
    n_lancamento INTEGER NOT NULL PRIMARY KEY,
    data DATE NOT NULL,
    descricao VARCHAR(20) NOT NULL,
    valor FLOAT(6, 2) NOT NULL,
    tipo VARCHAR(10) NOT NULL 
);

describe lancamento;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/lojinha/back/docs/lancamento.csv'
INTO TABLE lancamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from lancamento;

