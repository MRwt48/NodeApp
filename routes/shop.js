const express = require("express");

const path = require("path");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  // res.send("<h1>Hello</h1>"); //if not next then call res
  // res.sendFile(path.join(__dirname, "views", "shop.html")); //
  res.sendFile(path.join(__dirname, "..", "views", "shop.html")); // the oter method using __dirname
});

module.exports = routes;
