var accounts = [];
var user = new Object();
while (true) {
    var options = prompt(`select option
    1. Registration
    2. login 
    3. Exit`);
    if (options == '1' || options == '2') {
        switch (options) {
            case '1':
                userRegistration().then(function (result) {
                    console.log(result);
                }).catch(function (resultfromreject) {
                    alert(resultfromreject);
                });
                break;
            case '2':
                userLogin().then(function (result) {
                    alert(result);
                }).catch(function (resultfromreject) {
                    alert(resultfromreject);
                });
                break;
            default:
                alert("invalid option");
        }

    }
    else {
        alert("invalid option");
        break;
    }
}

function userRegistration() {
    return new Promise(function (resolve, reject) {
        var accountName = prompt("Enter Name of Account Holder :");
        var accountEmail = prompt("Enter Email :");
        var accountPassword = prompt("Enter password to Ur account :");
        var accountRepassword = prompt("Re-enter password to Ur account :");
        user = {};
        if (accountPassword != '' && accountPassword == accountRepassword &&
            accountPassword != "null" && accountPassword != "undefined") {
            user.name = accountName;
            user.email = accountEmail;
            user.password = accountRepassword;
            accounts.push(user);
            resolve(accounts);
            alert("Your Registered Successfully");
        }
        else {
            alert("registration failed!!");
            reject("Your Registration failed!");
        }
    });
}

function userLogin() {
    return new Promise(function (resolve, reject) {
        var accountEmail = prompt("Enter Email :");
        var index = 0;
        if(index <= accounts.length){
            for (; index < accounts.length; index++) {
                if (accountEmail === accounts[index].email) {
                    var accountPassword = prompt("Enter password to Ur account :");
                    if (accountPassword === accounts[index].password) {
                        resolve("login success");
                        alert("login success");
                    }
                    else {
                        reject("password wrong");
                        alert("password wrong");
                    }
                }
            }
        }

    });
}

