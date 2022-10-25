const Cli = require('../modells/Criacao');
const con = require('../Dao/ClienteDao');

const create = async (req, res) => {
    let string = Cli.create(req.body);
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const readAll = (req, res) => {
    let string = Cli.toReadAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(Cli.blobToAscii(result)).end();
        }
    });
}

const readLogin = (req, res) => {
    let string = Cli.read(req.params.login);
    con.query(string, (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Usuario.blobToAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}

const update = (req, res) => {
    let string = Cli.update(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const del = (req, res) => {
    let string = Cli.del(req.params.login);
    con.query(string, (err, result) => {
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
    readAll,
    readLogin,
    update,
    del
}