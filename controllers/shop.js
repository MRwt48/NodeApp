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

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render("shop/product-detail.ejs", {
      product: product,
      pageTitle: product.title,
      isActive: "products"
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
    pageTitle: "Your Cart"
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    isActive: "orders",
    pageTitle: "Your Orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    isActive: "checkout",
    pageTitle: "Checkout"
  });
};
