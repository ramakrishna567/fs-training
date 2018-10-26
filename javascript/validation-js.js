var records = [];
var user = {};
var firstName = document.getElementById('fname');
firstName.style.textTransform = "uppercase"
var lasttName = document.getElementById('lname');
lasttName.style.textTransform = "uppercase"
var emailId = document.getElementById('email');
var passWord = document.getElementById('passwd');
var rePassWord = document.getElementById('repasswd');

function sendData() {
    if (passWord.value === rePassWord.value && passWord.value != '' && rePassWord.value != '') {
        console.log(`Your Data is Sending ....
        Your First Name : ${firstName.value}
        Your Last Name : ${lasttName.value}
        Your Email Id : ${emailId.value}
        Your Password : ${passWord.value}`);
        var user = {};
        user.name = firstName.value + lasttName.value;
        user.email = emailId.value;
        user.password = passWord.value;
        setTimeout(function () {
            alert("Registration Success");
            console.log('Data Sent');
            records.push(user)
            console.log(records);
        }, 3000); 
        passWord.style.border = "1px solid gray";
        rePassWord.style.border = "1px solid gray";
    }
    else {
        passWord.style.border = "2px solid red";
        rePassWord.style.border = "2px solid red";
        console.log("Password will not be matched \n Retpe password!!");
    }

}

function userLogin() {
    console.log(records);

    var loginEmail = document.getElementById('loginEmail');
    var loginPass = document.getElementById('loginPasswd');
    index = 0;
    if (index < records.length) {
        for (; index < records.length; index++) {
            if (loginEmail.value == records[index].email) {
                if (loginPass.value == records[index].password) {
                    alert("login Success");
                    loginEmail.style.border = "1px solid gray";
                    loginPass.style.border = "1px solid gray";
                }
                else {
                    console.log("password worng");
                    loginPass.style.border = "2px solid red";

                }
            }
            else {
                loginEmail.style.border = "2px solid red";
                console.log("email Not found");
            }
        }
    }
}


function resetData(){
firstName.value = '';
lasttName.value = '';
emailId.value = '';
passWord.value = '';
rePassWord.value = '';
passWord.style.border = "1px solid gray";
rePassWord.style.border = "1px solid gray";
}