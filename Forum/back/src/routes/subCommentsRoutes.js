const express = require('express');
const router = express.Router();

const subComments = require('../controllers/subCommentsController')

router.post('/create', subComments.create)
router.delete('/delete', subComments.del)
router.get('/read' , subComments.read)

module.exports = router