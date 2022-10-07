const Item = require('../modells/items');
const con = require('../modells/DAO');

const criarSol = (req, res) => {
    con.query(Item.toCreateSol(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}
const listarSol = (req, res) => {
    con.query(Item.toReadAllSol(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
module.exports ={
    criarSol,
    listarSol
}