const express = require('express');
const router = express.Router();

const comments = require('../controllers/commentsController')

router.post('/create', comments.create)
router.delete('/delete', comments.del)
router.post('/readId', comments.read)
router.post('/vw_com', comments.readV)
router.post('/vw_c', comments.readF)

module.exports = router