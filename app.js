const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const server = http.createServer();

server.on("request", async (req, res) => {
  try {
    if (req.url === "/") {
      const html = await fs.readFile("index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } else if (req.url === "/styles.css") {
      const css = await fs.readFile("./public/styles.css");
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(css);
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
