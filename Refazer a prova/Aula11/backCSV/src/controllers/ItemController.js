const ItemDAO = require('../models/ItemDAO');
const Item = require('../models/Itens');

const login = (req, res)=>{
    if(req.body.username == "admin" && req.body.password == "admin"){
        res.json(req.body).end();
    }else{
        res.status(404).json("Usuario e senha invalido").end();
    }
}

const carregar = () => {
    Promise.resolve(ItemDAO.abrir())
        .then(arquivo => {
            Item.toListObj(arquivo);
        }).catch(err => {
            console.error(err);
        });
}

const gravar = () => {
    Promise.resolve(ItemDAO.salvar(Item.toCSV())).catch(err => {
        console.error(err);
    });
}

const criarItem = (req, res) => {
    if (Item.find(req.body.ni) == -1){
        Item.itens.push(req.body);
        res.status(201).json(req.body).end();
        gravar();
    }else{
        res.status(406).json(req.body).end();
    }
}

const listarItens = (req, res) => {
    carregar();
    res.json(Item.itens).end();
}

const alterarItem = (req, res) => {
    let indice = Item.find(req.body.ni);
    if (indice > -1) {
        Item.itens[indice] = req.body;
        res.status(200).json(Item.itens[indice]).end();
        gravar();
    } else
        res.status(404).end();
}

const excluirItem = (req, res) => {
    let indice = Item.find(req.params.ni);
    if (indice > -1) {
        res.status(204).json(Item.itens[indice]).end();
        Item.itens.splice(indice, 1);
        gravar();
    } else
        res.status(404).end();
}

module.exports = {
    login,
    carregar,
    criarItem,
    listarItens,
    alterarItem,
    excluirItem
}