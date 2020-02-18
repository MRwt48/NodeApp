const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      //runs immediately after regisering coz of return
      const parsedBody = Buffer.concat(body).toString();
      //to get value after message=
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // better to not use writeFileSync
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello</h1></body>");
  res.write("</html>");
  res.end();
};

//we use this
// module.exports = requestHandler;

// //exporting objects
// module.exports = {
//   handler: requestHandler,
//   someText: "Here is some text"
// };

//or we can do
module.exports.handler = requestHandler;
module.exports.someText = "Here is some text";
//can also directly write exports, module is implicit
//e.g exports.handler= requestHandler
