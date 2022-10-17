const Solicitacoes = require('../modells/Solicitacoes');
const con = require('../modells/solicitacaoDao');

const cadastrar = (req, res) => {
    con.query(Solicitacoes.toCreate(req.body), (err, result) => {
        if (err == null)
            if(result[1].affectedRows == 0)
                res.status(400).json(result).end();
            else
                res.status(201).json(result).end();
        // else
        //     if (err.sqlState == 23000)//Se o ni já está cadastrado
        //         res.status(406).json(err).end();
        //     else
        //         res.status(500).json(err).end();
    });
}

const listarSoli = (req, res) => {
    con.query(Solicitacoes.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    cadastrar,
    listarSoli
}