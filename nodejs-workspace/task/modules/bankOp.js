var records = require('./accData.js');
var fs = require('fs');
// var data = require('./accounts.js');
// var access = userVerify();

// Balance Enquiry 
function showBalance(accountNo) {

    if (accountNo == records.user.ac_no) {
        var transactionDetails = {
            id: 123,
            type: "showbalance",
            date: "25-10-2018",
            time: "10:43AM",
            current_bal: records.user.balance
        };
        console.log("Your Balance is :", records.user.balance);
        fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails));
    }
    else {
        console.log("you account does not exist");
    }
}

// Withdraw Amount
function withdrawTrans(accountNo, amountWithdraw) {
    if (amountWithdraw != '' && records.user.balance > amountWithdraw) {
        current_bal = records.user.balance - Number(amountWithdraw);
        var transactionDetails = {
            id: 456,
            type: "withdraw",
            date: "25-10-2018",
            time: "11:53AM",
            prev_bal: records.user.balance,
            depositAmount: amountWithdraw,
            current_bal: current_bal
        };
        console.log(`Transaction Success!! Amount Withdrawn!
        withdraw amount is : ${amountWithdraw}
        Balance is : ${current_bal}`);
        fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails));
    }
    else {
        console.log("Sorry Transaction Failed! Try Again!!")
    }
}

// Withdraw Amount
function depositTrans(accountNo, amountDeposit) {
    if (amountDeposit != '' && records.user.balance > amountDeposit) {
        current_bal = records.user.balance + Number(amountDeposit);
        var transactionDetails = {
            id: 123,
            type: "deposite",
            date: "25-10-2018",
            time: "10:53AM",
            prev_bal: records.user.balance,
            depositAmount: amountDeposit,
            current_bal: current_bal
        };
        console.log(`Transaction Success!! Amount Deposited!
        Deposit amount is : ${amountDeposit}
        Balance is : ${current_bal}`);
        fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails));
    }
    else {
        console.log("Sorry Transaction Failed! Try Again!!")
    }
}

module.exports = {
    showBalance: showBalance,
    withdrawTrans: withdrawTrans,
    depositTrans: depositTrans
};
