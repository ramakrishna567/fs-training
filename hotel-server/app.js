const express = require('express');
const app = express();
const port = '2020';
const host = '127.0.0.1'
// app.get('url', callback(req, res));

app.get('/', function (req, res) {
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    res.statu(200).send("server first request On /");
});

app.post('/home', function (req, res) {
    console.log(req.url + " " + req.method);
    res.statu(200).send("Welcome to home /");
});

app.post('/home', function (req, res) {
    console.log(req.url + " " + req.method);
    res.statu(200).send("Welcome to home /");
});

app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
    console.log(`Magic Happened on Port: ${port}`);

});
