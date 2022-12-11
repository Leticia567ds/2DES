const express = require('express');
const router = express.Router();

const posts = require('../controllers/postsControllers')

const middleware = require('../middleware/middleware')

router.post('/create', posts.create)
router.delete('/delete', middleware.validaAcesso, posts.del)
router.get('/read', posts.read)

module.exports = router