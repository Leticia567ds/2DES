const express = require('express');
const router = express.Router();

const comments = require('../controllers/commentsController')

router.post('/create', comments.create)
router.delete('/delete', comments.del)
router.get('/read', comments.read)

module.exports = router