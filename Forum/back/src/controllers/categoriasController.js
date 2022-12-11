const modelos = require('../models/categoriasModel')
const con = require('../dao/forum')

const read = (req, res) => {
    con.query(modelos.read(), (err, result) => {
        if (err == null)
            res.status(200).json(result).end()
        else
            res.status(500).json(err).end()
    })
}

const create = (req, res) => {
    con.query(modelos.create(req.body), (err, result) => {
        if (err == null)
            res.status(200).json(result).end()
        else
            res.status(500).json(err).end()
    })
}

module.exports = {
    read,
    create
}