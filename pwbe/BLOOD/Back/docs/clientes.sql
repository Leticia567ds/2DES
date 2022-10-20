drop database if exists clientes;
create database clientes charset = UTF8 collate utf8_general_ci;
use clientes;

create table clientes(
    id integer primary key not null auto_increment,
    pri_nome varchar(20) not null,
    login varchar(30)not null,
    nascimento varchar(25) not null,
    telefone varchar(15) not null,
    foto mediumblob
);
describe clientes;

load data infile 'C:/Users/Desenvolvimento/Desktop/BLOOD/Back/docs/foto_clientes.csv'
into table clientes
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from clientes;
