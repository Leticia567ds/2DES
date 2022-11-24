require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Usuario = require('./src/routes/usuario.route');
const Produto = require('./src/routes/produto.route');
const Carrinho = require('./src/routes/carrinho.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use('/login',Usuario)
    .use('/produtos',Produto)
    .use('/carrinho',Carrinho);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});