const modelos = require('../models/usuariosModel')
const con = require('../dao/forum')
const jwt = require('jsonWebtoken')
const multer = require('multer');
const upload = multer().single('foto')

require('dotenv').config()

const create = (req, res) => {
    upload(req, res, (err) => {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end();
        else {
            con.query(modelos.toCreate(req.body, req.file), (err, result) => {
                if (err == null) {
                    res.status(200).json(result)
                } else {
                    if (err.sqlState == 23000) {
                        res.status(406).json(err).end()
                    } else {
                        res.status(500).json(err).end()
                    }
                }
            })
        }

    });
}

const listaUsu = (req, res) => {
    con.query(modelos.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(modelos.toAscii(result)).end()
        } else {
            res.status(400).json(err).end()
        }
    })
}

const login = (req, res) => {
    con.query(modelos.login(req.body), (err, result) => {
        console.log(result.length);
        if (result.length > 0) {
            let dataLogin = { ...result[0] }
            delete dataLogin.senha
            delete dataLogin.role
            delete dataLogin.email
            console.log(dataLogin);
            jwt.sign(dataLogin, process.env.KEY, { expiresIn: '3h' }, function (err, token) {

                if (err == null) {
                    dataLogin["token"] = token
                    res.status(200).json(dataLogin).end()
                } else {
                    res.status(400).json(err).end()

                }
            })
        } else {
            res.status(404).json(err)
        }
    })
}



module.exports = {
    create,
    listaUsu,
    login,

}