const express = require('express');
const router = express.Router();

const subComments = require('../controllers/subCommentsController')

router.post('/create', subComments.create)
router.delete('/delete', subComments.del)
router.get('/read' , subComments.read)
router.post('/vw_c', subComments.readF)

module.exports = router