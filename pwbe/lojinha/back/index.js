const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection ({
    user: 'root',
    host : 'localhost',
    database: 'lojinhajapa'
});

app.get('/lancamento', (req, res)=>{
    let query = "SELECT * FROM lancamento";

    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
});

app.post('/lancamento', (req, res)=>{
    let query = `INSERT INTO lancamento VALUES (DEFAULT, curdate(), '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;

    con.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});


// app.get('/livro_caixa/lancamentos/:datas', (req, res)=>{
//     let string = `select * from lancamentos where datas = ${req.params.datas}`;
//     con.query(string, (err, result) =>{
//         if(err == null){
//             res.json(result).end()
//         }
//     });
// });


app.listen(3000, ()=>{
    console.log('Belé');
});