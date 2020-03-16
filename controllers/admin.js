const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  // ); //request goes top to bottom
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    isActive: "admin"
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save(); //calling the save method
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Products",
      isActive: "admin/products"
    });
  });
};
