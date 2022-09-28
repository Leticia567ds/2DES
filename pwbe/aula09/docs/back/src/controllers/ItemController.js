const Item = require('../modells/item');
const con = require('../modells/patrimoniodao');

const listarItens = (rq,res)=>{
    con.query(Item.toReadAll(), (err,result)=>{
        if(err == null)
        res.json(result).end();
        else
        res.status(500).end();
    });
}
const listarItem = (req,res)=>{
    res.json
}
const criarItem = (req,res)=>{
    res.json('Em criação').end();
}
const excluirItem = (req,res)=>{
    res.json('Em criação').end();
}

 module.exports = {
    listarItem,
    criarItem,
    excluirItem
}
