const modelos = require('../models/commentsModel')
const con = require('../dao/forum')


const create = (req, res) => {
    con.query(modelos.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end()
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

const del = (req, res) => {

    con.query(modelos.deletar(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end()
            else
                res.status(404).end()
        else
            res.status(400).json(err).end()
    })
}

const read = (req, res) => {
    con.query(modelos.ler(req.body), (err, result) => {
        if (err == null)
            res.status(200).json(result).end()
        else
            res.status(500).json(err).end()
    })
}

const readV = (req, res) => {
    con.query(modelos.lerV(req.body), (err, result) => {
        if (err == null)
            res.status(200).json(result).end()
        else
            res.status(500).json(err).end()
    })
}


module.exports = {
    del,
    create,
    read,
    readV
}