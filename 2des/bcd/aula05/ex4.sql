-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists Entregas;
create database Entregas charset=UTF8 collate utf8_general_ci;
use Entregas;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    --dizer que é uma chave primaria
    id_cliente integer not null primary key auto_increment,
    cpf_cliente varchar(20) not null,
    nome_cliente varchar(20) not null,
    cep_casa varchar(20) not null,
    num_casa varchar(20) not null,
    complemento varchar(20) not null
);
create table pedidos(
    id_pedidos integer not null,
    id_cliente integer not null,
    id_entregador integer not null,
    data_pedidos date not null,
    hora_pedido time ,
    hora_entrega time,
    hora_fim time not null,
    foreign key (id_clientes) references clientes(id_clientes),
      foreign key (id_entregador) references entregadores(id_entregadpr)
);
create table entregador(
    id_entregador integer not null,
     nome_entregador varchar(20) not null,
     veiculo varchar(20) not null,
    foreign key (id_entregador) references pedidos(id_entregador)
);
create table produto(
     id_produto integer not null,
     nome_produto varchar(20) not null,
     preco float(8,2),
    foreign key ( id_produto) references clientes(id_cliente)
);

describe clientes;
describe pedidos;
describe entregador;
describe produto;
show tables;