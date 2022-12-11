const express = require('express');
const router = express.Router();

const comments = require('../controllers/categoriasController')

router.get('/read', comments.read)
router.post('/create', comments.create)

module.exports = router