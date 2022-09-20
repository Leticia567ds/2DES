drop database if exists Emprestimo;
create database Emprestimo charset=UTF8 collate utf8_general_ci;
use Emprestimo;


CREATE TABLE telefones (
    cpf INTEGER NOT NULL,
    numero varchar(20) not null,
    tipo varchar(15) not null
);

CREATE TABLE clientes (
    cpf INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL,
    cep INTEGER NOT NULl,
    complemento INTEGER NOT NULl
);

CREATE TABLE emprestimos (
    id_emprestimos INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data date NOT NULL,
    capital float(5,2) NOT NULL,
    n_parcelas INTEGER NOT NULl,
    montante float(5,2) NOT NULL,
    taxa_juros float(2,2) not null,
    impostos float(5,2) not null
);

CREATE TABLE parcelas (
    cpf INTEGER NOT NULL,
    id_emprestimos INTEGER NOT NULL,
    id_parcelas INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    vencimento date NOT NULL,
    pagamento float(6,2) NOT NULL,
    valor_parcela float(5,2) NOT NULL,
    valor_recebido  float(5,2) NOT NULL,
    diferenca float(5,2) not null
 );

  alter table telefones add foreign key (cpf) references clientes(cpf);
  alter table parcelas add foreign key (cpf) references clientes(cpf);
  alter table parcelas add foreign key (id_emprestimos) references emprestimos(id_emprestimos);

describe telefones;
describe clientes;
describe emprestimos;
describe parcelas;


show tables;




LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/bcd/Emprestimo/back/src/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/bcd/Emprestimo/back/src/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/bcd/Emprestimo/back/src/emprestimos.csv'
INTO TABLE emprestimo
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/bcd/Emprestimo/back/src/parcelas.csv'
INTO TABLE parcelas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


select * from clientes;
select * from telefones;
select * from emprestimo;
select * from parcelas;
