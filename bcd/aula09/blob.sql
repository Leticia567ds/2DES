drop database if exists armazena_arquivos;
create database armazena_arquivos charset = UTF8 collate = utf8_general_ci;
use armazena_arquivos;
create table arquivos(
	 id integer primary key not null auto_increment,
	 tipo varchar(5) not null,
	 arquivo mediumblob
);

insert into arquivos values (null,'.jpg',load_file("C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/note.jpg"));
insert into arquivos values (null,'.png',load_file("C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/tel.png"));
insert into arquivos values (null,'.txt',load_file("C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/text.txt"));
insert into arquivos values (null,'.docx',load_file("C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/texto.docx"));

select id, tipo from arquivos;

select arquivo into dumpfile "C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/note.jpg" from arquivos where id = 1;
select arquivo into dumpfile "C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/tel.png" from arquivos where id = 2;
select arquivo into dumpfile "C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/text.txt" from arquivos where id = 3;
select arquivo into dumpfile "C:/Users/Desenvolvimento/Desktop/2DES/bcd/aula09/blobitens/texto.docx" from arquivos where id = 4;


