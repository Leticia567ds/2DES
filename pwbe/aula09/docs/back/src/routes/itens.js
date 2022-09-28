const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");

router.get("/patrimonio/itens", Item.listarItem);
router.post("/patrimonio/itens", Item.criarItem);
router.delete("/patrimonio/itens", Item.excluirItem);

//vincularemos os controles com as rotas 

module.exports = router;