var records = [];
var user = {};
while (true) {
    var chooseOption = prompt("Welcome to RK Bank!!\n    1. Registration\n    2. Login\n    3. Exit");
    if (chooseOption == '1' || chooseOption == '2'
        || chooseOption == 'registration' || chooseOption == 'login') {
        switch (chooseOption) {
            case '1':
            case 'registration':
                userRegistration();
                break;
            case '2':
            case 'login':
                userLogin();
                break;
        }
    }
    else {
        alert("Exited \n Thanks for visiting!!");
        break;
    }
}
function userLogin() {
    var accountNo = +prompt("Enter your Account No.");
    var accountPassword = prompt("Enter password to Ur account :");
    var account = userVerify(accountNo, accountPassword);
    while (true) {
        if (account) {
            console.log(records);
            var chooseTrans = prompt("Hi Accout Holder \n                Choose Transactions below :\n                1. Balance Enquiry\n                2. Deposit\n                3. Withdraw\n                4. Logout");
            if (chooseTrans == '1' || chooseTrans == '2' || chooseTrans == '3'
                || chooseTrans == 'balance' || chooseTrans == 'deposit' || chooseTrans == 'withdraw') {
                switch (chooseTrans) {
                    case '1':
                    case 'balance':
                        showBalance();
                        break;
                    case '2':
                    case 'deposit':
                        depositTrans();
                        break;
                    case '3':
                    case 'withdraw':
                        withdrawTrans();
                        break;
                    default:
                        alert("Invalid option");
                }
            }
            else {
                alert("logout success");
                break;
            }
        }
        else {
            alert("Account not Exist or login failed");
            break;
        }
    }
}
// user verification
function userVerify(accountNo, accountPassword) {
    account = 0;
    if (account <= records.length) {
        for (; account < records.length;) {
            if (accountNo == records[account].accountNo) {
                if (accountPassword == records[account].password) {
                    alert("login succed!! press enter");
                    return records[account];
                }
                else {
                    alert("Password Wrong! Re-enter");
                    return false;
                }
            }
            account++;
        }
        if (account > records[account]) {
            return false;
        }
    }
}
// Balance Enquiry 
var account = records[account];
function showBalance() {
    alert("Your account balance is : " + records[account].balance);
}
// Deposit Amount
function depositTrans() {
    var amountDeposit = +prompt("Enter Amount to Deposit :");
    if (amountDeposit) {
        alert("Transaction Success!! Amount Deposited!");
        records[account].balance += Number(amountDeposit);
    }
    else {
        alert("Sorry Transaction Failed! Try Again!!");
    }
}
// Withdraw Amount
function withdrawTrans() {
    var amountWithdraw = +prompt("Enter Amount to Withdraw :");
    if (records[account].balance > amountWithdraw) {
        alert("Transaction Success!! Amount Withdrawn!");
        records[account].balance -= Number(amountWithdraw);
    }
    else {
        alert("Sorry Transaction Failed! Try Again!!");
    }
}
function userRegistration() {
    var accountNo = +prompt("Enter you required Account No.");
    var accountName = prompt("Enter Name of Account Holder :");
    var accountEmail = prompt("Enter Email :");
    var accountPhone = +prompt("Enter Phone Number :");
    var accountPassword = prompt("Enter password to Ur account :");
    var openBalance = +prompt("Enter Amount for Opening balance :");
    if (openBalance > 2000) {
        var user_1 = {};
        console.log("first array", records);
        user_1.accountNo = accountNo;
        user_1.name = accountName;
        user_1.email = accountEmail;
        user_1.phone = accountPhone;
        user_1.password = accountPassword;
        user_1.balance = Number(openBalance);
        console.log("fill after values", user_1);
        records.push(user_1);
        alert("Your Registered Successfully");
    }
    else {
        alert("Your Regisration Failed \n Open Balance minimum : 2000/-");
    }
}
