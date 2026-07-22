function logRequest(req) {
    const time = new Date().toLocaleString();

    console.log(`
=================================
Time   : ${time}
Method : ${req.method}
Route  : ${req.url}
=================================
`);
}

module.exports = logRequest;