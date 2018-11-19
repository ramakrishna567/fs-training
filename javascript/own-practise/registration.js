function sendData(){
var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var userEmail = document.getElementById('emailId');
var pwd = document.getElementById('pwd');

var errorPara = document.getElementById('error');
let icon1 = document.getElementById('fname-icon');
    //first name checking to empty string
    if(firstName.value == ''){
        firstName.style.border = "2px solid red";

 
        errorPara.innerHTML="you must enter first name";
        errorPara.style.color = "red";
        icon1.style.visibility = "visible";        
    }else{
        let alphaExp = /^[a-zA-Z]+$/;
        if(firstName.value.match(alphaExp)){
            console.log("hiiiiiiiiiiiiiiiiiiiii");
        }else{
            errorPara.innerHTML="Don not Enter Numbers Please Enter Letters";
        }
        console.log(firstName.value.match(alphaExp));
    }

    


    // last name checking input field
    if(lastName.value == ''){
        lastName.style.border = "2px solid red";
        var errorPara2 = document.getElementById('error-lname');
        let icon2 = document.getElementById('lname-icon');

        errorPara2.innerHTML="you must enter last name";
        errorPara2.style.color = "red";
        icon2.style.visibility = "visible";
    }

    //email verifying to empty string only
    if(userEmail.value == ''){
        userEmail.style.border = "2px solid red";
        var errorPara3 = document.getElementById('error-email');
        let icon3 = document.getElementById('email-icon');

        errorPara3.innerHTML="you must enter email";
        errorPara3.style.color = "red";
        icon3.style.visibility = "visible";
    }

    //password verifying to empty string only
    if(pwd.value == ''){
        pwd.style.border = "2px solid red";
        var errorPara4 = document.getElementById('error-pwd');
        let icon4 = document.getElementById('pwd-icon');

        errorPara4.innerHTML="you must Enter password";
        errorPara4.style.color = "red";
        icon4.style.visibility = "visible";
    }
}
