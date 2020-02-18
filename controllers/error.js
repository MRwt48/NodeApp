exports.error404 = (req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));

    res.status(404).render("error", { pageTitle: "Page Not Found", Active: '' });
};