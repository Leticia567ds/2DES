DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;

USE estacionamento;

CREATE TABLE clientes (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(60) NOT NULL,
    telefone VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE veiculos (
    id  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(60) NOT NULL UNIQUE,
    tipo VARCHAR(60) NOT NULL
);

CREATE TABLE vagas(
    id varchar(10) NOT NULL PRIMARY KEY,
    disponivel BOOLEAN NOT NULL
);

CREATE TABLE entrada (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    id_veiculo INTEGER NOT NULL,
    data date not null,
    hora_entrada varchar(20) NOT NULL,
    hora_saida varchar(20) NOT NULL,
    valor float(5, 2) not null,
    foreign key (id_cliente) references clientes(id),
    foreign key (id_veiculo) references veiculos(id)
);




LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento/veiculo.csv'
INTO TABLE veiculos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento/vagas.csv'
INTO TABLE vagas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/2DES/pwbe/estacionamento/entrada.csv'
INTO TABLE entrada
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from veiculos;
select * from vagas;
select * from entrada;


