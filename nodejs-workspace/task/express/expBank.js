const fs = require('fs');
const express = require('express');
const users = require('../modules/accData');
const find = require('../modules/accounts');
const bank = require('../modules/bankOp');
const app = express();

const host = '127.0.0.1';
const port = '1010';
app.get('/', function (req, res) {
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    res.status(200).send("Welcome to Rk Bank");
});

// Show user Details
app.get('/showbalance', function (req, res) {
    console.log("GET request on /showbalance");
    console.log(req.url + " " + req.method);

    var accessUser = bank.showBalance(accountNo);
    if (accessUser) {
        res
            .status(200)
            .send(`Current Balance : ${accessUser.balance}`);
    }
    else {
        res
            .status(200)
            .send('enter correct details for accountNo');
    }

});

// Deposit
app.post('/deposit', function (req, res) {
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    var accessUser = bank.depositTrans(req.query.accountNo, req.query.amount);
    if (accessUser) {
        res
            .status(200)
            .send(`Deposit done \n Transaction Details add to Histories \n,`+JSON.stringify(accessUser));
        fs.appendFile('data.log', JSON.stringify(accessUser) + ",\n", function (err, data) {
            if (err) throw err;
            console.log("transaction detailed are stored");
        });
    }
    else {
        res
            .status(200)
            .send(`Transaction Failed! Try agaun`);
    }
});

// withdraw
app.post('/withdraw', function (req, res) {
    console.log("GET request on /withdraw");
    console.log(req.url + " " + req.method);
    var accessUser = bank.withdrawTrans(req.query.accountNo, req.query.amount);
    if (accessUser) {
        res
            .status(200)
            .send(`withdraw done \n Transaction Details add to Histories\n`+JSON.stringify(accessUser));
        fs.appendFile('data.log', JSON.stringify(accessUser) + ",\n", function (err, data) {
            if (err) throw err;
            console.log("transaction detailed are stored");
        });
    }
    else {
        res
            .status(200)
            .send(`Transaction Failed! Try agaun`);
    }
});


app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
});