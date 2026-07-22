const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

const emitter = require("../utils/emitter");

const filePath = path.join(__dirname, "..", "data", "notes.txt");

// Read File (Async/Await)
async function readFile(req, res) {

    try {

        const data = await fsPromises.readFile(filePath, "utf8");

        emitter.emit("fileRead");

        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        res.end(JSON.stringify({
            success: true,
            content: data,
        }));

    } catch {

        res.writeHead(500, {
            "Content-Type": "application/json",
        });

        res.end(JSON.stringify({
            success: false,
            message: "Unable to read file."
        }));

    }

}

// Write File
function writeFile(req, res) {

    const message =
        `File updated at ${new Date().toLocaleString()}\n`;

    fs.appendFile(filePath, message, (err) => {

        if (err) {

            res.writeHead(500, {
                "Content-Type": "application/json",
            });

            return res.end(JSON.stringify({
                success: false,
                message: "Unable to write file."
            }));

        }

        emitter.emit("fileWritten");

        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        res.end(JSON.stringify({
            success: true,
            message: "File updated successfully."
        }));

    });

}

// Stream File
function streamFile(req, res) {

    emitter.emit("streamStarted");

    const stream = fs.createReadStream(filePath, "utf8");

    res.writeHead(200, {
        "Content-Type": "text/plain",
    });

    stream.pipe(res);

    stream.on("end", () => {
        emitter.emit("streamFinished");
    });

    stream.on("error", () => {

        res.writeHead(500, {
            "Content-Type": "application/json",
        });

        res.end(JSON.stringify({
            success: false,
            message: "Streaming failed."
        }));

    });

}

module.exports = {
    readFile,
    writeFile,
    streamFile,
};