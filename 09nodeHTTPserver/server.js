const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("requestReceived", (url) => {
  console.log(`New Request: ${url}`);
});

const server = http.createServer((req, res) => {

  emitter.emit("requestReceived", req.url);

  // Home
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Welcome to Node.js HTTP Server");
  }

  // Read File
  else if (req.url === "/read" && req.method === "GET") {

    fs.readFile("./data/notes.txt", "utf8", (err, data) => {

      if (err) {
        res.writeHead(500);
        return res.end("Error reading file");
      }

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });

      res.end(data);

    });

  }

  // Write File
  else if (req.url === "/write" && req.method === "GET") {

    fs.writeFile(
      "./data/notes.txt",
      "This file was updated using fs.writeFile().",
      (err) => {

        if (err) {
          res.writeHead(500);
          return res.end("Write Failed");
        }

        res.end("File Updated Successfully");

      }
    );

  }

  // Stream File
  else if (req.url === "/stream" && req.method === "GET") {

    const stream = fs.createReadStream("./data/notes.txt");

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    stream.pipe(res);

  }

  else {

    res.writeHead(404);

    res.end("Route Not Found");

  }

});

server.listen(3000, () => {

  console.log("Server Running on http://localhost:3000");

});