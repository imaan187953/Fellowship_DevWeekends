function about(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(
        JSON.stringify({
            success: true,
            message: "This server is built using Node.js Core HTTP Module.",
        })
    );
}

module.exports = about;