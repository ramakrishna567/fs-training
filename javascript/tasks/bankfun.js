var records = [];
var user = new Object();
while (true) {
    var chooseOption = prompt(`Welcome to RK Bank!!
    1. Registration
    2. Login
    3. Exit`);
    if (chooseOption == '1' || chooseOption == '2'
        || chooseOption == 'registration' || chooseOption == 'login') {
        switch (chooseOption) {
            case '1': case 'registration':
                userRegistration();
                break;
            case '2': case 'login':
                userLogin();
                break;
        }
    }
    else {
        alert("Exited \n Invalid Option! Try Agaain!!");
        break;
    }
}


function userLogin() {
    var accountNo = prompt("Enter your Account No.");
    var accountPassword;
    var access = userVerify(accountNo, accountPassword);
    while (true) {
        if (access) {
            console.log(records);
            var chooseTrans = prompt(`Hi Accout Holder 
                Choose Transactions below :
                1. Balance Enquiry
                2. Deposit
                3. Withdraw
                4. Logout`);
            if (chooseTrans == '1' || chooseTrans == '2' || chooseTrans == '3'
                || chooseTrans == 'balance' || chooseTrans == 'deposit' || chooseTrans == 'withdraw') {
                switch (chooseTrans) {
                    case '1': case 'balance':
                        showBalance();
                        break;
                    case '2': case 'deposit':
                        depositTrans();
                        break;
                    case '3': case 'withdraw':
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
    var accountPassword;
    account = 0;
    if (account <= records.length) {
        for (; account < records.length;) {
            if (accountNo == records[account].accountNo) {
                accountPassword = prompt("Enter password to Ur account :");

                if (accountPassword == records[account].password) {
                    alert("login succed!! press enter");
                    return true;
                }
                else {
                    alert("Password Wrong! Re-enter");
                    return false;
                }
            }
            account++;
        }
        if(account > records[account]) {
            return false;
        }
    }
}

// Balance Enquiry 
var account = records[account];
function showBalance() {
    alert(`Your account balance is : ${records[account].balance}`);

}

// Deposit Amount
function depositTrans() {
    var amountDeposit = prompt("Enter Amount to Deposit :");
    if (amountDeposit != '') {
        alert("Transaction Success!! Amount Deposited!");
        records[account].balance += Number(amountDeposit);
    }
    else {
        alert("Sorry Transaction Failed! Try Again!!")
    }
}

// Withdraw Amount
function withdrawTrans() {
    var amountWithdraw = prompt("Enter Amount to Withdraw :");
    if (amountWithdraw != '' && records[account].balance > amountWithdraw) {
        alert("Transaction Success!! Amount Withdrawn!");
        records[account].balance -= Number(amountWithdraw);
    }
    else {
        alert("Sorry Transaction Failed! Try Again!!")
    }
}


function userRegistration() {
    const accountNo = prompt("Enter you required Account No.");
    var accountName = prompt("Enter Name of Account Holder :");
    var accountEmail = prompt("Enter Email :");
    var accountPhone = prompt("Enter Phone Number :");
    var accountPassword = prompt("Enter password to Ur account :");
    var openBalance = prompt("Enter Amount for Opening balance :");
    user = {};
    if (openBalance > 2000) {
        alert("Your Registered Successfully");
        console.log(records);
        user.accountNo = accountNo;
        user.name = accountName;
        user.email = accountEmail;
        user.phone = accountPhone;
        user.password = accountPassword;
        user.balance = Number(openBalance);
        records.push(user);
    }
    else {
        alert("Your Regisration Failed \n Open Balance minimum : 2000/-");
    }
}