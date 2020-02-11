const http = require("http");
const routes = require("./routes( used without express )"); // ./ used for local path

const server = http.createServer(routes.handler); //returns a server

server.listen(1000);
