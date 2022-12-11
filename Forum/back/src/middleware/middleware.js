require('dotenv').config()
const jwt = require('jsonWebtoken')

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).end()
        else {
            if (data.role === "ADMIN" || data.role === "USER") {
                next()
                res.status(200)
            } else {
                res.status(401).end()
            }
        }
    })
}

const validaAcessoADM = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {

        if (err != null) res.status(404).json(err).end()
        else {
            if (data.role === "USER") {
                next()
                res.status(200)
            } else {
                res.status(401).end()
            }
        }

    })

    
}

module.exports = {
    validaAcesso,
    validaAcessoADM
}