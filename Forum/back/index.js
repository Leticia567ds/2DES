const express = require('express');
const cors = require('cors');

const usuarios = require('./src/routes/usuariosRoutes')
const posts = require('./src/routes/postsRoutes')
const comments = require('./src/routes/commentsRoutes')
const subComm = require('./src/routes/subCommentsRoutes')
const categorias = require('./src/routes/categoriasRoutes')
const curtidas = require('./src/routes/curtidasRoutes')

const app = express()
    .use(express.json())
    .use(cors())
    .use('/usuarios', usuarios)
    .use('/posts', posts)
    .use('/comments', comments)
    .use('/subcomm', subComm)
    .use('/categorias', categorias)
    .use('/curtidas', curtidas)

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});