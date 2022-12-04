require('dotenv').config();
//variavel de ambiente e tem que dar npm i dotenv.
//process.env => variavel de ambiente
const PORT = process.env.PORT||3000
const express = require('express');
const cors = require('cors');

const Depar = require('./src/routes/departamento.route')
// const Produto = require('')
// const Solicitacao = require('')

//Iniciar a Api
//express é o require('express');
const app = express()
.use(express.json())
.use(cors())
.use(Depar)


//ligar
app.listen(PORT,() =>{
    console.log('Servidor em execução na porta ' + PORT);
});