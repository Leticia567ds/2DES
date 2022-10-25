const express = require('express');
const router = express.Router();

const Cliente = require("../contollers/clientesControllers");

router.post("/create",Cliente.create);
router.get("/read",Cliente.readAll);
router.get("/read/:login",Cliente.readLogin);
router.put("/update",Cliente.update);
router.delete("/del/:login",Cliente.del);


module.exports = router;