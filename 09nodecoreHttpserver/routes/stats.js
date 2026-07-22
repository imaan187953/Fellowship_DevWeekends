const { getTotalRequests } = require("../utils/requestCounter");

function stats(req, res) {

    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(
        JSON.stringify({
            success: true,
            totalRequests: getTotalRequests(),
            uptime: `${Math.floor(process.uptime())} seconds`,
        })
    );
}

module.exports = stats;