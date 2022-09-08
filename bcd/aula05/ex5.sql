drop database if exists Onibus;
create database Onibus charset=UTF8 collate utf8_general_ci;
use Onibus;
-- DDL Criação da estrutura do Banco de dados
create table Motorista(
    --dizer que é uma chave primaria
   cpf_motorista varchar(11) not null,
    nome_motorista varchar(20) not null,

);
create table telefones(
    cpf_motorista varchar(11) not null,
    telefone varchar(15) not null,
    foreign key (cpf_motorista) references Motorista(cpf_motorista)
);
create table linha(
    id_linha integer not null,
    descricao_linha varchar(50) not null,
    data_pedidos timestamp not null,
    foreign key (id_linha) references Motorista(cpf_motorista)
);
create table horario(
    cpf_motorista  varchar(11) not null,
    hora time not null,
    foreign key (cpf_motorista) references Motorista(cpf_motorista)
);
create table motorista_linha(
 cpf_motorista integer not null,
);


describe Motorista;
describe telefones;
describe linha;
describe horario;
show tables;