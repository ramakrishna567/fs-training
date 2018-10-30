const express = require('express');
const path = require('path');

const app = express();
const port = '3030';
const host = '127.0.0.1';

// project static declaration
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.get('/', function (req, res) {
    console.log(req.url+" "+req.method);
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public//index.html'))
});

app.get('/roasting', function (req, res) {
    console.log(req.url+" "+req.method);
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public//html/roasting.html'))
});

app.get('/grinding', function (req, res) {
    console.log(req.url+" "+req.method);
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public/html/grinding.html'))
});

app.get('/brewing', function (req, res) {
    console.log(req.url+" "+req.method);
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public/html/brewing.html'))
});

app.get('/drinks', function (req, res) {
    console.log(req.url+" "+req.method);    
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public/html/drinks.html'))
});

app.get('/coffee-surve', function (req, res) {
    console.log(req.url+" "+req.method);    
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join(__dirname, 'public/html/coffee-surve.html'))
});

app.listen(port, host, function () {
    console.log(`Server is running... at ${host}:${port}`);
})