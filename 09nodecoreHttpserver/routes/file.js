const {
    readFile,
    writeFile,
    streamFile,
} = require("../controllers/fileController");

function fileRoute(req, res) {

    if (req.url === "/read") {
        return readFile(req, res);
    }

    if (req.url === "/write") {
        return writeFile(req, res);
    }

    if (req.url === "/stream") {
    console.log("✅ /stream route matched");
    return streamFile(req, res);
}

    if (req.url.startsWith("/user")) {

        const url = new URL(req.url, "http://localhost");

        const name = url.searchParams.get("name") || "Guest";

        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        return res.end(JSON.stringify({
            success: true,
            message: `Hello, ${name}!`,
        }));

    }

    return false;

}

module.exports = fileRoute;