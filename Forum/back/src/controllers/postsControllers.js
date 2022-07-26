const modelos = require('../models/postsModel')
const con = require('../dao/forum')

const create = (req, res) => {
    con.query(modelos.toCreate(req.body, req.file), (err, result) => {
        if (err == null)
            res.status(201).end()
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
    con.query(modelos.ler(), (err, result) => {
        if (err == null)
            res.status(200).json(result).end()
        else
            res.status(500).json(err).end()
    })
}



module.exports = {
    del,
    create,
    read
}