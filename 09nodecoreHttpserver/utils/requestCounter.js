let totalRequests = 0;

function incrementRequests() {
    totalRequests++;
}

function getTotalRequests() {
    return totalRequests;
}

module.exports = {
    incrementRequests,
    getTotalRequests,
};