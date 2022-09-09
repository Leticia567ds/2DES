const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection ({
    user: 'root',
    host : 'localhost',
    database: 'locacoes'
});

app.get('/usuarios', (req, res)=>{
    let string = "SELECT * FROM usuarios";

    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});


app.get('/filmes', (req, res)=>{
    let string = "SELECT * FROM filmes";

    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/aluguel', (req, res)=>{
    let string = "SELECT * FROM locacao";

    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(2000, ()=>{
    console.log('Belé');
});