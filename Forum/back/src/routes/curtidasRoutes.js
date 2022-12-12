const express = require('express');
const router = express.Router();

const curtidas = require('../controllers/curtidasController')

router.get('/read', curtidas.readC)
router.get('/readId', curtidas.readCById)
router.post('/create', curtidas.create)
router.delete('/del', curtidas.del)

module.exports = router
