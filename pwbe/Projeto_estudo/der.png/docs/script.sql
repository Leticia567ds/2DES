drop database if exists consultorio;
create database consultorio charset=UTF8 collate utf8_general_ci;
use consultorio;

create table profissionais(
    id integer not null primary key auto_increment,
    nome varchar(30) not null,
    especialidade varchar(40) not null
);

create table consultas(
    id_consulta integer not null primary key auto_increment,
    id_profissional integer not null,
    paciente varchar(30) not null,
    data varchar(100) not null,
    horario varchar(100) not null,
    foreign key (id_profissional) references profissionais(id)
);

create table tratamentos(
    id_tratamento integer not null primary key auto_increment,
    id_consulta integer not null,
    tratamento varchar(30) not null,
    valor float(5,0) not null,
   foreign key (id_consulta) references consultas(id_consulta)
);


INSERT INTO profissionais values(DEFAULT,"Juliana","Dentista");
INSERT INTO consultas values(DEFAULT,1,"Carlos","28/11/2022","09:00");
INSERT INTO tratamentos values(DEFAULT,1,"Limpeza",50);

select * from profissionais;
select * from consultas;
select * from tratamentos;

create view vw_tudo as
select p.id, p.nome, p.especialidade, c.id_consulta, c.paciente, c.data, c.horario, t.id_tratamento, t.tratamento, t.valor
from profissionais p inner join consultas c on p.id = c.id_consulta
inner join tratamentos t on t.id_consulta = c.id_consulta;

select * from vw_tudo;

UPDATE tratamentos SET id_consulta = 1, tratamento = 's', valor = 100;

show tables;