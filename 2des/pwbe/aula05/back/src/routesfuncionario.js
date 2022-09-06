const Express = require('express');

const router = Express.Router();

const FuncController = require("./controllers/FuncController");

router.get("/funcionarios", FuncController.listar);
router.get("/funcionarios/:cod", FuncController.listafun);
router.post("/funcionrios", FuncController.cadastrar);
router.delete("/funionrios",FuncController.excluir);
router.put("/funcionarios", FuncController.editar);

module.exports = router;