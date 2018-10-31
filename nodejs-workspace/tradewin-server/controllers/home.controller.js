module.exports.rootReq = function (req, res) {
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    res
        .status(200)
        .send("Server first request On /");
}

module.exports.homeReq = function (req, res) {
    console.log("GET request on /home");
    console.log(req.url + " " + req.method);
    res
        .status(200)
        .send("Server first request On /home");
}