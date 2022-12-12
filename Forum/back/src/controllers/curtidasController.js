const modelos = require('../models/curtidasModel')
const con = require('../dao/forum')

const readC = (req, res) => {
    con.query(modelos.read(), (err, result) => {
        if (err == null)
            res.status(200).json(modelos.toAscii(result)).end()
        else
            res.status(500).json(err).end()
    })
}

const readCById = (req, res) => {
    con.query(modelos.readById(req.body.id_user), (err, result) => {
        if (err == null)
            res.status(200).json(modelos.toAscii(result)).end()
        else
            res.status(500).json(err).end()
    })
}

const create = (req, res) => {

    con.query(modelos.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end()
        else
            res.status(403).json(err).end()
    })
}

const del = (req, res) => {
    con.query(modelos.del(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).json(result).end()
            else
                res.status(404).json(err).end()
        else
            res.status(400).json(err).end()
    })
}



module.exports = {
    readC,
    readCById,
    create,
    del
}