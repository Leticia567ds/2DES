DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria charset=UTF8 collate utf8_general_ci;

USE pizzaria;

CREATE TABLE clientes (
    id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    telefone VARCHAR(15)  NOT NULL,
    logradouro INTEGER NOT NULL ,
    compremento VARCHAR(30) NOT NULL,
    numero DECIMAL(5,0) NOT NULL,
    bairro VARCHAR(30) NOT NULL

);
CREATE TABLE pedidos (
    id_pedidos INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cliente INTEGER NOT NULL,
    data  DATETIME NOT NULL,
    valor DECIMAL(5,2) NOT  NULL,
   foreign key (id_cliente) references clientes(id_cliente)
);

CREATE TABLE item_pedidos (
    id_pedidos INTEGER NOT NULL ,
    id_pizza INTEGER NOT NULL,
    quantidade DECIMAL(5,2) NOT  NULL,
    valor DECIMAL(5,2) NOT  NULL
    foreign key (id_pedidos) references pedidos(id_pedidos)
    foreign key (id_pizza) references pizza(id_pizza)
    
);

CREATE TABLE pizza (
    id_pizza INTEGER NOT NULL,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    valor DECIMAL(4,2) NOT  NULL
);

describe clientes;
describe pedidos;

describe item_pedidos;
describe pizza;

show tables;

LOAD DATA INFILE 'C:\Users\Desenvolvimento\Desktop\2DES\bcd\pizzaria\back\src\clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '/r/n'
IGNORE 1 ROWS;

select * from clientes;