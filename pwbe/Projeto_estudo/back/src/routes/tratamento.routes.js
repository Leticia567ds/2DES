const express = require('express');
const router = express.Router();

const tratamento = require ('../controllers/tratamento')



router.get('/read', tratamento.readAll)
router.post('/create', tratamento.create)
router.put('/alterar', tratamento.update)


module.exports = router;