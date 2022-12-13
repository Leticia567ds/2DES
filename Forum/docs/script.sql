drop database if exists forum;

create database forum charset = UTF8 collate utf8_general_ci;

use forum;

create table usuarios(
    id_user integer not null primary key auto_increment,
    nome varchar(50) not null,
    email varchar(30) not null unique,
    senha varchar(20) not null,
    role varchar(20) not null,
    foto mediumblob
);

create table posts (
    id_user integer not null,
    id_post integer not null primary key auto_increment,
    categoria varchar(20) not null,
    data date not null,
    conteudo varchar(400) not null,
    content_image mediumblob,
    foreign key (id_user) references usuarios (id_user)
);

create table comentarios(
    id_comment integer not null primary key auto_increment,
    id_post integer not null,
    id_user integer not null,
    texto varchar(300) not null,
    foreign key (id_user) references usuarios (id_user),
    foreign key (id_post) references posts (id_post) on delete cascade
);

create table sub_comments(
    id_sub_com integer not null primary key auto_increment,
    id_comment integer not null,
    id_user integer not null,
    texto varchar(300) not null,
    foreign key (id_comment) references comentarios (id_comment) on delete cascade,
    foreign key (id_user) references usuarios (id_user)
);

create table categorias(
    id_categoria integer not null primary key auto_increment,
    cat_name varchar(255) not null,
    cat_description varchar(255) not null
);

create table curtidas(
    id_user integer not null,
    id_post integer not null,
    foreign key (id_user) references usuarios (id_user),
    foreign key (id_post) references posts (id_post)
);

drop view if exists vw_comentarios;

create view vw_comentarios as
select
    c.id_comment,
    c.id_post,
    c.id_user,
    c.texto,
    u.nome,
    u.foto
from
    comentarios c
    inner join usuarios u on c.id_user = u.id_user;

create view vw_sub_Comen as
select
    c.id_sub_com,
    c.id_comment,
    c.texto,
    u.nome,
    u.foto
from
    sub_comments c
    inner join usuarios u on c.id_user = u.id_user;

drop view if exists vw_curtidas;

create view vw_curtidas as
select
    c.id_user,
    c.id_post,
    p.conteudo,
    p.content_image
from
    curtidas c
    inner join posts p on p.id_post = c.id_post;

drop view vw_posts;
create view vw_posts as
select
    p.id_user,
    p.id_post,
    p.categoria,
    u.nome,
    p.data,
    p.conteudo,
    p.content_image,
    u.foto
from
    posts p
    inner join usuarios u on p.id_user = u.id_user;
    
insert into
    usuarios
values
    (
        default,
        "Convidado",
        "convidadoy@gmail.com",
        "1234",
        "CONVIDADO",
        null
    );

insert into
    usuarios
values
    (
        default,
        "Ana",
        "Ana@gmail.com",
        "4321",
        "ADMIN",
        null
    );

insert into
    posts
values
    (
        1,
        default,
        "Trending",
        curdate(),
        "Esse filme é bacana",
        null
    );

insert into
    comentarios
values
    (default, 1, 1, "é mesmo");

insert into
    sub_comments
values
    (default, 1, 1, "Verdade parça");

insert into
    categorias
values
    (
        default,
        "Terror",
        "Filmes de terror"
    );