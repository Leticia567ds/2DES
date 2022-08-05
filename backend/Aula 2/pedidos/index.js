const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
  user : 'root',
  host : 'localhost',
  database : 'pedidos'
});
// const con2 = mysql.createConnection({
//   user : 'root',
//   host : 'localhost',
//   database : 'telefones'
// });

app.use(express.json());

app.get('/pedidos',(req, res)=>{
 
  let priNome = req.query.priNome;
  let sobre = req.query.sobrenome;
  let ende = req.query.endereco;
  let telefone = req.query.tel;
  let string =  `insert into clientes value(null,'${priNome}','${sobre}', '${ende}')`;
  let tel = `insert into telefones value('${6}','${telefone}')`;
  con.query(string, (err,result)=>{
  if(err ==  null){
    res.json("Dados recebidos com sucesso, estamos enviando para o Banco de Dados");
  }else{
    res.json("Dados recebidos com sucesso, mas infelizmente não consegimos enviar para o Banco de Dados");
  }

  });
  con.query(telefone, (err,result)=>{
  if(err ==  null){
    res.json("Dados recebidos com sucesso, estamos enviando para o Banco de Dados");
  }else{
    res.json("Dados recebidos com sucesso, mas infelizmente não consegimos enviar para o Banco de Dados");
  }

  });
});


app.listen(3000,()=>{
  console.log("Respondendo na porta 3000");
});