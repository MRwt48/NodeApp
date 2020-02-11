const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>New Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name=message type=text><button type=submit>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    //extracting data
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(parsedBody);
      //fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    //extracting data end
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>New Page</title></head>");
  res.write("<body>This is a Node.js page</body>");
  res.write("</html>");
  res.end();
};

//module.exports = requestHandler;

// for many exports
//looks better to me
module.exports = {
  handler: requestHandler,
  someText: "Hard coded text"
};

// module.exports.handler = requestHandlers;
// // or just use exports without module.
// exports.someText = "Hard coded text";
