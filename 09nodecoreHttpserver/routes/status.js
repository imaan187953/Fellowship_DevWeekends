function status(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(
        JSON.stringify({
            success: true,
            status: "Running",
            uptime: `${Math.floor(process.uptime())} seconds`,
        })
    );
}

module.exports = status;