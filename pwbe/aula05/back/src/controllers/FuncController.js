const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
});

function listar(req, res) {
    let query = "SELECT * FROM funcionarios";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listafun(req, res) {
    let query = `SELECT * FROM funcionarios WHERE id = '${req.params.id}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrar(req, res) {
    let query = `INSERT INTO funcionarios VALUES (DEFAULT,'${req.body.matricula}', '${req.body.nome}', '${req.body.cargo}', ${req.body.salario}, '${req.body.cpf}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluir(req, res) {
    let query = `DELETE FROM funcionarios WHERE id = '${req.body.id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editar(req, res){
    let query = `UPDATE funcionarios SET id = '${req.body.id}', matricula = '${req.body.matricula}', nome = ${req.body.nome}, cargo = ${req.body.cargo}, salario = ${req.body.salario}, cpf = ${req.body.cpf} WHERE cod = '${req.body.id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listar,
    listafun,
    cadastrar,
    excluir,
    editar
}