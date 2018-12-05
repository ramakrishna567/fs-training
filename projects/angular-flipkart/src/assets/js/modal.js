
var login = document.getElementById('login-modal');
login.addEventListener("click", sendData);

function sendData() {
    var userEmail = document.getElementById('exampleInputEmail1');
    var pwd = document.getElementById('exampleInputPassword1');
    var errorEmail = document.getElementById('error-email');
    let emailIcon = document.getElementById('email-icon');
    let pwdIcon = document.getElementById('pwd-icon');
    let errorPwd = document.getElementById('error-pwd');

    //email verifying to empty string only
    if (userEmail.value == '' || userEmail.value == 'undefined' || userEmail.value == 'null') {
        userEmail.style.border = "2px solid red";
        errorEmail.innerHTML = "you must enter email";
        errorEmail.style.color = "red";
        emailIcon.style.display = "inline";
    } else {
        let alphaExp = /^[a-zA-Z]+$/;
        if (userEmail.value.match(alphaExp)) {
            userEmail.style.border = "1px solid red";
            errorEmail.style.color = "red";
            emailIcon.style.display = "inline";

            errorEmail.innerHTML = "Do not Enter Numbers Please Enter Letters";
        } else {
            userEmail.style.border = "1px solid blue";
            errorEmail.style.color = "blue";
            errorEmail.innerHTML = "";
            emailIcon.style.display = "none";

        }
    }

    //password verifying to empty string only
    if (pwd.value == '') {
        pwd.style.border = "2px solid red";
        var errorPara4 = document.getElementById('error-pwd');
        let icon4 = document.getElementById('pwd-icon');

        errorPara4.innerHTML = "you must Enter password";
        errorPara4.style.color = "red";
        pwdIcon.style.display = "inline";
    } else {
        errorPwd.style.border = "1px solid blue";
        errorPwd.style.color = "blue";
        errorPwd.innerHTML = " ";
        pwdIcon.style.display = "none";
    }
}