const express = require("express");

const path = require("path");

const routes = express.Router();

const adminData = require("./admin"); //to import products

routes.get("/", (req, res, next) => {
  const products = adminData.products;
  // res.send("<h1>Hello</h1>"); //if not next then call res
  // res.sendFile(path.join(__dirname, "views", "shop.html")); //
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html")); // the oter method using __dirname
  res.render("shop", { prods: products, pageTitle: "Shop", isActive: "shop" });
});

module.exports = routes;
