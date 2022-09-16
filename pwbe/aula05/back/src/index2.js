const Express = require("express");
const cors = require("cors");

const routes = require("./routesfuncionario.js");

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(2500, () => {
    console.log("Foi");
});