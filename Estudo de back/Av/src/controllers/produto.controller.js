const Produto = require('../models/produto.model');
const con = require('../dao/solicitacoes.dao');

const create = (req, res) => {
    con.query(Produto.create(req.body), (err, result) => {
        if(err == null)
        res.status(201).end();
        else
        if(err.sqlState == 2300)
        res.status(406).json(err).end();
        else
        res.status(500).json(err).end();

    });
}