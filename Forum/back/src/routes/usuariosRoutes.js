const express = require('express');
const router = express.Router();

const usuarios = require('../controllers/usuariosController')

router.post('/cadastro', usuarios.create)
router.post('/login', usuarios.login)
router.get('/read', usuarios.listaUsu)

module.exports = router