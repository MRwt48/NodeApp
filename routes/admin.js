const express = require("express");

const prodControl = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", prodControl.getAddProduct);

router.post("/add-product", prodControl.postAddProduct);

router.get("/products");

module.exports = router;
