const express = require('express');
const router = express.Router();

const pro = require("../controllers/produto.controllers");

router.get("/", pro.readAll);
router.get("/:id", pro.readName);


module.exports = router;
