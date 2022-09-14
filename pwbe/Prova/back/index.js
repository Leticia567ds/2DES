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


app.get('/vw_dovolucao', (req, res)=>{
    let string = "SELECT * FROM  vw_devolucoes";

    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

// app.delete('/usuarios', (req, res)=>{
//     let string = `DELETE FROM usuarios WHERE cod = '${req.body.cod}'`;
//     con.query(string, (err, result) => {
//         if(err == null) {
//             res.status(200).json(req.body).end();
//         }else {
//             res.status(400).json(err).end();
//         }
//     });
// });


app.post('/user', (req, res)=>{
    let string = `INSERT INTO usuarios VALUES (DEFAULT, '${req.body.nome}', '${req.body.endereco}', '${req.body.telefone}')`;

    con.query(string, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.listen(2000, ()=>{
    console.log('Belé');
});