const Tratamento = require('../model/tratamento')
const con = require('../dao/connection')

const readAll = (req, res ) => {
    con.query(Tratamento.toreadAll(), (err, result) => {
        if(err == null) {
            res.json(result).end()
        } else {
            res.json(err).end();
        }
    });
}

const create = (req, res ) => {
    con.query(Tratamento.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end()
        } else {
            res.json(err).end();
        }
    });
}

const update = (req, res) => {
    con.query(Tratamento.update(req.body), (err, result) => {
        if(err == null){
            res.status(200).end()
        }
    })
}



module.exports = {
    readAll,
    create,
    update
}