// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorControl = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: true })); // body parsing for form response

// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); //to let request to continue to other middlewares
// });

// app.use("/", (req, res, next) => {
//   console.log("this always runs");
//   next();
// });

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/", errorControl.get404);

// const server = http.createServer(app);
// server.listen(1000);
//instead of this we can use app.listen
// no need for http import
app.listen(1000);
