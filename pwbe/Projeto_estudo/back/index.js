const express = require('express');
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT||3000

const routes = require('./src/routes/tratamento.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tratamentos', routes);


app.listen(PORT, () => {
    console.log('Respondendo na porta ' + PORT);
});