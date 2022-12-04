const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/deparatmaneto.controller")

router.post('/Departamento/create',Departamento.create);
router.delete('/Departamento/:cod_depto', Departamento.del);
router.get("/Departamento/read", Departamento.readAll);

module.exports = router;