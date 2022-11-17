DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;

USE estacionamento;

CREATE TABLE clientes (
    id INTEGER Not Null PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(60) NOT NULL,
    telefone VARCHAR(20) NOT NULL 
);

CREATE TABLE veiculos (
    id_veiculo  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id INTEGER NOT NULL,
    placa VARCHAR(50) NOT NULL UNIQUE,
    tipo VARCHAR(60) NOT NULL,
    foreign key (id) references clientes(id)
);

CREATE TABLE vagas(
    id varchar(10) NOT NULL PRIMARY KEY,
    disponivel BOOLEAN NOT NULL
);

CREATE TABLE entrada (
    id_entrada INTEGER  NOT NULL PRIMARY KEY,
    id INTEGER NOT NULL,
    hora_entrada date NOT NULL,
    hora_saida time NOT NULL,
    valor float(5, 2) not null,
    foreign key (id) references clientes(id)
);


create view vw_client as
select c.nome_cliente, c.endereco, c.telefone, v.tipo, v.placa
from clientes c inner join veiculos v
on c.id = v.id;

create view vw_entrada as
select c.nome_cliente, e.hora_entrada, e.hora_saida, e.valor
from clientes c inner join entrada e
on c.id = e.id;


insert into clientes values(1,"Ana","Varjão","19 9856-765");
insert into clientes values(2,"Renan","Sertãozinho","19 7756-775");
insert into clientes values(3,"Yuki","JardimII","19 2756-785");


select * from clientes;

insert into entrada values(1,1,curdate(),curtime(),20.00);
select * from entrada;


insert into veiculos values(DEFAULT,1,"CCF000","carro");


select * from veiculos;



drop trigger if exists update_valor;
delimiter //
create trigger update_valor
after update on entrada
for each row
begin
	DECLARE tempo INTEGER;
    SET tempo := (SELECT ROUND((TIME_TO_SEC(TIMEDIFF(NEW.hora_saida, (SELECT hora_entrada FROM entrada WHERE id = NEW.id)))/50), 0));
	INSERT INTO entrada VALUES (NEW.id,DEFAULT,DEFAULT,data,hora_entrada,hora_saida,valor,hora_saida*0.5);
end //
delimiter ;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/estacionamento2/src/clientes.csv'
-- INTO TABLE clientes
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/estacionamento2/src/veiculo.csv'
-- INTO TABLE veiculos
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;



-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/estacionamento2/src/vagas.csv'
-- INTO TABLE vagas
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/2DES/pwbe/estacionamento2/src/entrada.csv'
-- INTO TABLE entrada
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from veiculos;
-- select * from clientes;
-- select * from vagas;
-- select * from entrada;
-- select * from vw_cli;


