exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));//not used with templates
  res
    .status(404)
    .render("error", { pageTitle: "Page Not Found", isActive: "" });
};
