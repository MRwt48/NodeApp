const express = require("express");

const prodControl = require("../controllers/shop");

const router = express.Router();

router.get("/", prodControl.getIndex);

router.get("/products", prodControl.getProducts);

router.get("/cart", prodControl.getCart);

router.get("/checkout", prodControl.getCheckout);

module.exports = router;
