const {
    readFile,
    writeFile,
} = require("../controllers/fileController");

function fileRoute(req, res) {

    if (req.url === "/read") {
        return readFile(req, res);
    }

    if (req.url === "/write") {
        return writeFile(req, res);
    }

    return false;
}

module.exports = fileRoute;