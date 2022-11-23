const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/deparatmaneto.controller")

router.post("/create",Departamento.create);
router.delete("/del/:cod_depto", Departamento.del);
router.delete("/read", Departamento.readAll);

module.exports = router;