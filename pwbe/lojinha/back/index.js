const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const con = mysql.createConnection ({
    user: 'root',
    host : 'localhost',
    database: 'lojinhajapa'
});

app.get('/lojinhajapa/lancamento', (req, res)=>{
    let string = 'select * from lancamento';
    con.query(string, (err, result) =>{
        if(err == null){
            res.json(result)
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