DROP DATABASE IF EXISTS lojinhajapa;
CREATE DATABASE lojinhajapa charset=UTF8 collate utf8_general_ci;

USE lojinhajapa;

CREATE TABLE lancamento (
    n_lancamento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data VARCHAR(20) NOT NULL,
    descricao VARCHAR(20) NOT NULL,
    valor FLOAT(6, 2) NOT NULL,
    tipo VARCHAR(10) NOT NULL 
);

describe lancamento;

show tables;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/2des/pwbe/lojinha/back/docs/lancamento.csv'
INTO TABLE lancamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from lancamento;

