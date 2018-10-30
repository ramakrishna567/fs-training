var find = require('./accounts');
var fs = require('fs');

// Balance Enquiry 
function showBalance(accountNo) {
    var accessUser = find.userVerify(accountNo);
    if (accessUser) {
        console.log("Your Current balance is ", accessUser.balance);
        var transactionDetails = {
            id: 123,
            type: "showbalance",
            date: "25-10-2018",
            time: "10:43AM",
            ac_no: accessUser.ac_no,
            ac_name:accessUser.ac_name,
            current_bal: accessUser.balance,
            status:true
        };
        fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails)+",\n");

    } else {
        console.log("Your account does not exist");
    }
}

// Withdraw Amount
function withdrawTrans(accountNo, amountWithdraw) {
    var accessUser = find.userVerify(accountNo);
    if (accessUser) {
        if (amountWithdraw != '' && accessUser.balance > amountWithdraw) {
            current_bal = accessUser.balance - Number(amountWithdraw);
            var transactionDetails = {
                id: 789,
                type: "withdraw",
                date: "25-10-2018",
                time: "10:43AM",
                ac_no: accessUser.ac_no,
                ac_name:accessUser.ac_name,
                prev_bal: accessUser.balance,
                amountWithdraw: amountWithdraw,
                current_bal: current_bal,
                status:true
            };
            console.log(`Transaction Success!! Amount Withdrawn!
            withdraw amount is : ${amountWithdraw}
            Balance is : ${current_bal}`);
            fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails)+",\n");
            return true;
        }
        else {
            console.log("Sorry Transaction Failed! Try Again!!");
            return false;
        }
    }
    else{
        console.log("you account does not exist");
        return false;
    }
}

// Deposite Amount
function depositTrans(accountNo, amountDeposit) {
    var accessUser = find.userVerify(accountNo);
    if (accessUser) {
        if (amountDeposit != '') {
            current_bal = accessUser.balance + Number(amountDeposit);
            var transactionDetails = {
                id: 456,
                type: "withdraw",
                date: "25-10-2018",
                time: "10:43AM",
                ac_no: accessUser.ac_no,
                ac_name:accessUser.ac_name,
                prev_bal: accessUser.balance,
                amountWithdraw: amountDeposit,
                current_bal: current_bal,
                status:true
            };
            console.log(`Transaction Success!! Amount Deposited!
            Deposit amount is : ${amountDeposit}
            Balance is : ${current_bal}`);
            fs.appendFileSync('../fs-module/transactions.json', JSON.stringify(transactionDetails)+",\n");
        }
        else {
            console.log("Sorry Transaction Failed! Try Again!!")
        }    
    } else{
        console.log("you account does not exist");
    }
}

module.exports = {
    showBalance: showBalance,
    withdrawTrans: withdrawTrans,
    depositTrans: depositTrans
};
