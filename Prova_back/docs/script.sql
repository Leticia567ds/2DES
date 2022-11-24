DROP DATABASE IF EXISTS lojinha;

CREATE DATABASE lojinha;

USE lojinha;

CREATE TABLE usuario (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(153) NOT NULL,
	email VARCHAR(153) NOT NULL,
	senha VARCHAR(200) NOT NULL
);

CREATE TABLE produtos (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	valor DOUBLE(5,2) NOT NULL
);

CREATE TABLE carrinho (
	id_usuario INTEGER NOT NULL,
	id_produto INTEGER NOT NULL,
	quantidade INTEGER NOT NULL,
	CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
	CONSTRAINT fk_id_produto FOREIGN KEY (id_produto) REFERENCES produtos (id)
);

INSERT INTO usuario VALUES (DEFAULT, 'Manoel Enzo Rodrigues', 'manoel_enzos@wredenborg.se', 'CO5zwp2sib');
INSERT INTO usuario VALUES (DEFAULT, 'Andrea Flávia', 'andrea_flavia@htomail.com', '9KIgZPmHzw');

INSERT INTO produtos VALUES (DEFAULT, 'Cafeteira', 159.90);
INSERT INTO produtos VALUES (DEFAULT, 'Processador', 125.80);
INSERT INTO produtos VALUES (DEFAULT, 'Sofá', 899.90);
INSERT INTO produtos VALUES (DEFAULT, 'Mesa de Jantar', 399.99);

INSERT INTO carrinho VALUES (1, 2, 1);
INSERT INTO carrinho VALUES (1, 3, 1);
INSERT INTO carrinho VALUES (2, 1, 1);
INSERT INTO carrinho VALUES (2, 2, 1);
  return `UPDATE  usuario set nome = '${model.nome}', email = '${model.email}', senha = '${model.senha}' where id =${model.id}`;

  UPDATE usuario set nome = "Manoel Enzo Rodrigues", email = "manoel_enzos@wredenborg.se", senha = "12345" where id=1;
  SELECT * FROM produtos WHERE id=2;

  create view vw_produto as
select i.id, p.nome, p.valor , c.quantidade from produtos p
inner join carrinho c on p.id = c.id_produto
inner join usuario i on i.id = c.id_usuario;



select * from vw_produtos;

  SELECT * FROM vw_produto WHERE id=2;
  INSERT INTO carrinho VALUES(DEFAULT,DEFAULT,10)

  DELETE FROM carrinho WHERE id_produto = 1;