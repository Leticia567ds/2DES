const express = require('express');
const router = express.Router();

const car = require("../controllers/carrinho.controllers");

router.get("/:id",car.listarBuscar);
router.post("",car.create);
router.delete("/:id_usuario",car.del);


module.exports = router;