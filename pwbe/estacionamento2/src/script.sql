DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;

USE estacionamento;

CREATE TABLE clientes (
    id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(60) NOT NULL,
    telefone VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE veiculos (
    id_veiculo  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cliente  INTEGER NOT NULL,
    placa VARCHAR(60) NOT NULL UNIQUE,
    tipo VARCHAR(60) NOT NULL
);

CREATE TABLE vagas(
    id varchar(10) NOT NULL PRIMARY KEY,
    disponivel BOOLEAN NOT NULL
);

CREATE TABLE entrada (
    id INTEGER  NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    id_veiculo INTEGER NOT NULL,
    data VARCHAR(15) not null,
    hora_entrada varchar(15) NOT NULL,
    hora_saida varchar(15) NOT NULL,
    valor float(5, 2) not null,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_veiculo) references veiculos(id_veiculo)
);


create view vw_cli as
select c.nome_cliente, c.endereco, c.telefone, v.tipo, v.placa
from clientes c inner join veiculos v
on c.id_cliente = v.id_veiculo;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento2/src/veiculo.csv'
INTO TABLE veiculos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento2/src/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento2/src/vagas.csv'
INTO TABLE vagas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento2/src/entrada.csv'
INTO TABLE entrada
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from veiculos;
select * from clientes;
select * from vagas;
select * from entrada;
select * from vw_cli;


