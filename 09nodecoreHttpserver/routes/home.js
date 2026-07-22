function home(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(
        JSON.stringify({
            success: true,
            message: "Welcome to the Node HTTP Server!",
        })
    );
}

module.exports = home;