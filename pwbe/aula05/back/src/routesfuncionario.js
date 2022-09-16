const Express = require('express');

const router = Express.Router();

const FuncController = require("./controllers/FuncController");

router.get("/funcionarios", FuncController.listar);
router.get("/funcionarios/:cod", FuncController.listafun);
router.post("/funcionarios", FuncController.cadastrar);
router.delete("/funcionarios",FuncController.excluir);
router.put("/funcionarios", FuncController.editar);

module.exports = router;