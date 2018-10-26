var records = require('./accData.js');
var data = require('./accounts.js');
// var access = userVerify();
console.log(data.userVerify());

// Balance Enquiry 
    function showBalance() {

    if (access != false) {
        console.log("Your Balance is :", access);
    }
    console.log("world");
    
}

var bankOp = {
    showBalance : showBalance
}
module.exports = bankOp;


// // Withdraw Amount
// function withdrawTrans() {
//     var amountWithdraw = prompt("Enter Amount to Withdraw :");
//     if (amountWithdraw != '' && records[account].balance > amountWithdraw) {
//         alert("Transaction Success!! Amount Withdrawn!");
//         records[account].balance -= Number(amountWithdraw);
//     }
//     else {
//         alert("Sorry Transaction Failed! Try Again!!")
//     }
// }

// // Deposit Amount
// function depositTrans() {
//     var amountDeposit = prompt("Enter Amount to Deposit :");
//     if (amountDeposit != '') {
//         alert("Transaction Success!! Amount Deposited!");
//         records[account].balance += Number(amountDeposit);
//     }
//     else {
//         alert("Sorry Transaction Failed! Try Again!!")
//     }
// }