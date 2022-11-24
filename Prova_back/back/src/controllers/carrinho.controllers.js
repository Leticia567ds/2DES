const car = require('../models/carrinho.model');
const con = require('../dao/lojinha.dao');


const create = (req, res) => {
    con.query(car.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const listarBuscar = (req, res) => {
    con.query(car.listarBuscar(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const del = (req, res) => {
    con.query(car.del(req.params), (err, result) => {
        con.query(car.del(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })});
}

module.exports = {
    listarBuscar,
    create,
    del
}