// const products = [];//now saving in a file instead of the array
const fs = require("fs");
const path = require("path");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      //use arrow funtion so that 'this' doesn't loose the context
      //else 'this' will not work
      //this is inside the callback function
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent); //function to read json file
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log("error     ", err);
      });
    });
    // products.push(this);//used with array
  }

  static fetchAll(cb) {
    //cb=callback
    // static so that objet creation is not required to call this function
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFileSync(p, (err, filecontent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
    // return products; //retuning array
  }
};
