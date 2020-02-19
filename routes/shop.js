const express = require("express");

const prodControl = require("../controllers/products");

const router = express.Router();

router.get("/", prodControl.getProducts);

module.exports = router;
