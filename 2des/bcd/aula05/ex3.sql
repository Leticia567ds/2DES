-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists Duplicates;
create database Duplicates charset=UTF8 collate utf8_general_ci;
use Duplicates;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    --dizer que é uma chave primaria
    cod_cli integer not null primary key auto_increment,
    nome_cliente varchar(20) not null,
    rua_num varchar(20) not null,
    bairro_cliente varchar(20) not null,
    cidade_cliente varchar(20) not null,
    Estado_uf_cliente varchar(20) not null,
);
create table telefones(
    cod_cliente integer not null,
    tipo varchar(50) not null,
   telefone varchar(15) not null,
    foreign key (cod_cliente) references clientes(cod_cli)
);
create table duplicates(
     num_duplicado integer not null primary key auto_increment,
     cod_cliente integer not null,
     data_compra_cliente timestamp not null,
     vencimento_compra timestamp not null,
     data_pagamento timestamp not null,
     valor float(8,2) not null,
     diference_valor float(8,2),
    foreign key (num_duplicado) references cliente(cod_cli)

);

describe clientes;
describe telefones;
describe duplicates;
show tables;