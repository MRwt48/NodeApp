const express = require("express");

const prodControl = require("../controllers/products");

const router = express.Router();

router.get("/add-product", prodControl.getAddProduct);

router.post("/add-product", prodControl.postAddProduct);

module.exports = router;
