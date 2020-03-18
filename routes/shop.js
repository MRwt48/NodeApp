const express = require("express");

const prodControl = require("../controllers/shop");

const router = express.Router();

router.get("/", prodControl.getIndex);

router.get("/products", prodControl.getProducts);

router.get("/products/:productId", prodControl.getProduct);
// ': variable ' tells router about dynamic url
//handles any url having /product/anythingHere

//**** router.get('/products/someLink');****//
//the above commented url will not be handled
//if used after the :productId url route
//since it falls under url to be handled by that
//put specific routes first

router.get("/cart", prodControl.getCart);

router.post("/cart", prodControl.postCart);

router.get("/orders", prodControl.getOrders);

router.get("/checkout", prodControl.getCheckout);

module.exports = router;
