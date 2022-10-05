const express = require('express');
const router = express.Router();

const solicitacao = require("../controllers/solicitacaoCon");

router.post("/Solicitacoes/cadastrar", solicitacao.cadastrar);
router.get("/Solicitacoes/listar", solicitacao.listarSoli);


module.exports = router;