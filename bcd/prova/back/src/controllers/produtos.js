
const Item = require('../modells/items');
const con = require('../modells/DAO');

const criarProduto = (req, res) => {
    con.query(Item.toCreateProdutos(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}
const listarProd = (req, res) => {
    con.query(Item.toReadAllProd(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
const buscarProd = (req, res) => {
    con.query(Item.toRead(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
module.exports = {
    criarProduto,
    listarProd,
    buscarProd
}