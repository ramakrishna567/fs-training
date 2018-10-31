const express = require('express');
const path = require('path'); // It is a core module
const app = express();
const port = '2020';
const host = '127.0.0.1'
// app.get('url', callback(req, res));

//Declare static directory
// app.use(express.static(path.join(__dirname,'flipkart')));

app.get('/', function (req, res) {
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    res
        .status(200)
        .send("hiii");
});

//FLIPKART START
// app.get('/home', function (req, res) {
//     console.log(req.url + " " + req.method);
//     res
//         .status(200)
//         .sendFile(path.join(__dirname,'flipkart/index.html')); //html file sending means hosting
// });

// app.get('/cart', function (req, res) {
//     console.log(req.url + " " + req.method);
//     res
//         .status(200)
//         .sendFile(path.join(__dirname,'flipkart/cart.html')); //html file sending means hosting
// });

// app.get('/download-app', function (req, res) {
//     console.log(req.url + " " + req.method);
//     res
//         .status(200)
//         .sendFile(path.join(__dirname,'flipkart/download-app.html')); //html file sending means hosting
// });

// app.get('/sellon-flipkart', function (req, res) {
//     console.log(req.url + " " + req.method);
//     res
//         .status(200)
//         .sendFile(path.join(__dirname,'flipkart/sellon-flipkart.html')); //html file sending means hosting
// });

// FLIPKART END


app.get('/file', function (req, res) {
    console.log("GET request on /file");
    console.log(req.url + " " + req.method);
    // console.log(__dirname);
    res
        .status(200)
        .sendFile(path.join(__dirname, '../server.js'))
        .sendFile(__dirname + '/server.js'); // always gives absolute path
});

app.get('/json', function (req, res) {
    console.log("GET request on /data");
    console.log(req.url + " " + req.method);
    console.log(req.query);
    if (Object.keys(req.query).length > 0) {
        res
            .status(200)
            .set('application / json')
            .json(req.query);
    }
    else {
        var user = {
            name: "john",
            age: 29,
            email: "john@gmail.com",
            gender: "male"
        }
        res
            .status(200)
            .set('application / json')
            .json(user);
    }
});

app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
    console.log(`Magic Happened on Port: ${port}`);
});
