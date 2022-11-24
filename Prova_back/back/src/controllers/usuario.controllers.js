const User = require('../models/usuario.model');
const con = require('../dao/lojinha.dao');

const create = (req, res) => {
    con.query(User.create(req.body), (err, result) => {
        if (err == null)
            res.status(200).json(result).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const update = (req, res) => {
    con.query(User.update(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    create,
    update
 
}