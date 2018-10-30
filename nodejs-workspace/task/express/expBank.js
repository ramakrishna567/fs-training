const fs = require('fs');
const express = require('express');
const users = require('../modules/accData');
const bank = require('../modules/bankOp');
const app = express();

const host = '127.0.0.1';
const port = '1010';
app.get('/', function(req, res){
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    res.status(200).send("Welcome to Rk Bank");
});

// Show user Details
app.get('/users', function(req, res){
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    // res.status(200).send(users.user);
    res.status(200).send(`Account Number : ${users.user.ac_no} \n
    Name : ${users.user.ac_name} \n
    Current Balance : ${users.user.balance}
    \n Your Data is Appended`);
    fs.appendFile('./data.log', JSON.stringify(users), function(err,fd){
        if(err) throw err;
        console.log("data appended");
    });
});

// Deposit
app.post('/deposit', function(req, res){
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    // res.status(200).send(users.user);
    res.status(200).send(`Deposit done \n Transaction Details add to Histories`);
    bank.depositTrans(1122, 2000);
});

// withdraw
app.post('/withdraw', function(req, res){
    console.log("GET request on /");
    console.log(req.url + " " + req.method);
    if(bank.withdrawTrans(1122,500)){
    res.status(200).send(`withdraw done \n Transaction Details add to Histories`);
    }
    else{
    res.status(404).send(`withdraw failed \n Transaction Details did not add to Histories`);
    }
});


app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
});