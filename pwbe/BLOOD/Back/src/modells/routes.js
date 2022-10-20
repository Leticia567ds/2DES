const express = require('express');
const router = express.Router();

const Cliente = require("../contollers/clientesControllers");

router.get("/clintes", Cliente.listar);
router.post("/clintes", Cliente.cadastrarCliente);
router.delete("/clintes", Cliente.excluir);

module.exports = router;