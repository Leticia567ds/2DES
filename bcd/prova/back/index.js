const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/itens.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(itens);

app.listen(2200, () => {
    console.log("Belé");
});