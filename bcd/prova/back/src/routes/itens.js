
const express = require('express');
const router = express.Router();

const Produto = require("../controllers/produtos");
const Departamento = require("../controllers/departamento");
const Solicitacao = require("../controllers/solicitacao");


router.post("/solicitacao/produtos", Produto.criarProduto); 
router.get("/solicitacao/produtos",  Produto.listarProd);
router.get("/solicitacao/produtos/:Nome_produto",Produto.buscarProd);


router.post("/solicitacao/departamento", Departamento.criarDepart);
router.delete("/solicitacao/departamento", Departamento.excluirDepart);


router.post("/solicitacao/solicitacao", Solicitacao.criarSol);
router.get("/solicitacao/solicitacao", Solicitacao.listarSol);


module.exports = router;