const Produto = require('../models/produto.model');
const con = require('../dao/lojinha.dao');

const readAll = (req, res) => {
    con.query(Produto.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
const readName = (req, res) => {
    con.query(Produto.readNome(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readAll,
    readName
}