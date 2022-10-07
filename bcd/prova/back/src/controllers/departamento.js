const item = require('../modells/items');
const con = require('../modells/DAO');

const criarDepart = (req, res) => {
    con.query(item.toCreateDepart(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}
const excluirDepart = (req, res) => {
    con.query(item.toDeleteDep(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}
module.exports = {
    criarDepart,
    excluirDepart
}