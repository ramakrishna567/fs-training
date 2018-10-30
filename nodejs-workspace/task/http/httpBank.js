const http = require('http');
const users = require('../modules/accData');
const bank = require('../modules/bankOp');

const host = '127.0.0.1';
const port = '3030';
var server = http.createServer(function (req, res) {
    console.log(req.url + " " + req.method);

    if (req.url == '/' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end("Welcome to RK Bank");
    }
    else if (req.url == '/users' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(users.user));
    }
    else if (req.url == '/deposit' && req.method == 'POST') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end(JSON.stringify("Deposit success"));
        bank.depositTrans(1122, 2000);
    }
    else if (req.url == '/withdraw' && req.method == 'POST') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end(JSON.stringify("withdraw success"));
        bank.withdrawTrans(1122, 2000);
    } else {
        res.statusCode = 404;
        res.setHeader('content-Type', 'text/plain');
        res.end("url not found");
    }
});
server.listen(port, host, function () {
    console.log(`server is running at http://${host}:${port}`);
});