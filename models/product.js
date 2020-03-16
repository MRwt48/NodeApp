// const products = [];//now saving in a file instead of the array
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsfromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(title, imagrUrl, price, description) {
    this.title = title;
    this.imagrUrl = imagrUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsfromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log("Error =", err);
      });
    });
    //use arrow funtion so that 'this' doesn't loose the context
    //else 'this' will not work
    //this is inside the callback function
    // products.push(this);//used with array
  }

  static fetchAll(cb) {
    //cb=callback
    // static so that objet creation is not required to call this function
    // return products; //retuning array
    getProductsfromFile(cb);
  }
};
