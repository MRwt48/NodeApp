const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //also works if we use __dirname,'..' instead of rootDir (like .. better)
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product", Active: "product" });
};

exports.postAddProduct = (req, res, next) => {
  //only triggers for POST request similar to .use
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // .get() makes sure it is the exact path given
  //not working with / and ./ so using path core module
  // res.sendFile(path.join(rootDir, "views", "shop.html")); //not used with templating engines
  // / not used since pathh.join() builds a correct path according to OS
  Product.fetchAll(products => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop Product",
      Active: "shop"
    });
  });
};
