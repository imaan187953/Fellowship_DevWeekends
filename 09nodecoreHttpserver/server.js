const http = require("http");

const logRequest = require("./utils/logger");
const emitter = require("./utils/emitter");

const home = require("./routes/home");
const about = require("./routes/about");
const status = require("./routes/status");
const fileRoute = require("./routes/file");

const stats = require("./routes/stats");

const {
    incrementRequests,
} = require("./utils/requestCounter");

const PORT = 3000;

const server = http.createServer((req, res) => {

    logRequest(req);

    incrementRequests();

    emitter.emit("requestReceived", req.method, req.url);

    if (req.url === "/") {
        home(req, res);
    }
    else if (req.url === "/about") {
        about(req, res);
    }
    else if (req.url === "/status") {
        status(req, res);
    }
    else if (req.url === "/stats") {
    stats(req, res);
}
    else if (fileRoute(req, res) !== false) {
        // The file route handled the request.
    }
    else {
        res.writeHead(404, {
            "Content-Type": "application/json",
        });

        res.end(
            JSON.stringify({
                success: false,
                message: "Route not found",
            })
        );
    }

});

server.listen(PORT, () => {
    emitter.emit("serverStarted");
    console.log(`Server running at http://localhost:${PORT}`);
});