drop database if exists usuarios;
create database usuarios charset = UTF8 collate utf8_general_ci;
use usuarios;

create table clientes(
    login varchar(30) primary key not null,
    pri_nome varchar(20) not null,
    nascimento varchar(25) not null,
    telefone varchar(15) not null,
    avatar mediumblob
);

insert into clientes values
("Garcialamos","Garcia Lamos","1992-02-23","(19)98787-7778", to_base64(LOAD_File("C:/Users/Desenvolvimento/Desktop/2DES/pwbe/BLOOD/Back/imagem/avatar01.jpg"))),
("CarolLima","Carol Lima da Silva","2002-02-23","(19)98787-9978", to_base64(LOAD_File("C:/Users/Desenvolvimento/Desktop/2DES/pwbe/BLOOD/Back/imagem/avatar02.jpg"))),
("RenanPedro","Renan Pedro Feijão","2004-02-23","(19)97787-3478", to_base64(LOAD_File("C:/Users/Desenvolvimento/Desktop/2DES/pwbe/BLOOD/Back/imagem/avatar03.jpg"))),
("Hewou","He wou shiuy","2005-02-23","(19)97977-5478", to_base64(LOAD_File("C:/Users/Desenvolvimento/Desktop/2DES/pwbe/BLOOD/Back/imagem/avatar04.jpg")));

select login, pri_nome, nascimento, telefone from clientes;


