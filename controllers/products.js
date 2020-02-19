const products = [];

exports.getAddProduct = (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  // ); //request goes top to bottom
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product", isActive: "admin" });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.send("<h1>Hello</h1>"); //if not next then call res
  // res.sendFile(path.join(__dirname, "views", "shop.html")); //
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html")); // the oter method using __dirname
  res.render("shop", { prods: products, pageTitle: "Shop", isActive: "shop" });
};
