const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      isActive: "shop",
      pageTitle: "Shop"
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      isActive: "products"
    });
  }); // calling the static method
  // res.send("<h1>Hello</h1>"); //if not next then call res
  // res.sendFile(path.join(__dirname, "views", "shop.html")); //
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html")); // the oter method using __dirname
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    isActive: "cart",
    pageTitle: "Your cart"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    isActive: "checkout",
    pageTitle: "Checkout"
  });
};
