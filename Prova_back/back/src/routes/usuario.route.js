const express = require('express');
const router = express.Router();

const user = require("../controllers/usuario.controllers");

router.post("", user.create);
router.put("/usuario/:id", user.update);



module.exports = router;
