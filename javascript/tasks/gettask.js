var formEle = document.createElement('form');

function userRegistration() {
    // formEle.method = "POST";
    // formEle.action = "form.php"

    var fnameLabel = document.createElement('label');
    formEle.appendChild(fnameLabel);
    fnameLabel.innerHTML = "Enter First Name";
    var fname = document.createElement('input');
    fname.placeholder = "Enter first Name";
    formEle.appendChild(fname);
    fname.setAttribute('id', 'first');
    var br = document.createElement('br');
    formEle.appendChild(br);

    var lnameLabel = document.createElement('label');
    formEle.appendChild(lnameLabel);
    lnameLabel.innerHTML = "Enter last Name";
    var lname = document.createElement('input');
    lname.placeholder = "Enter last Name";
    lname.setAttribute('id', 'last');
    formEle.appendChild(lname);
    var br = document.createElement('br');
    formEle.appendChild(br);

    var emailLabel = document.createElement('label');
    formEle.appendChild(emailLabel);
    emailLabel.innerHTML = "Enter Email ID";
    var emailID = document.createElement('input');
    emailID.placeholder = "Enter Email ID";
    emailID.setAttribute('id', 'email');
    emailID.type="email";
    emailID.required;
    formEle.appendChild(emailID);
    var br = document.createElement('br');
    formEle.appendChild(br);

    var passLabel = document.createElement('label');
    formEle.appendChild(passLabel);
    passLabel.innerHTML = "Enter Password";
    var passWord = document.createElement('input');
    passWord.setAttribute('id','pass');
    passWord.placeholder = "Enter Email ID";
    passWord.type="password";
    formEle.appendChild(passWord);


    var send = document.createElement('button');
    send.type = "button";
    send.innerText = "send Data";
    formEle.appendChild(send);


    send.addEventListener('click',function(){
        console.log("Click Trigger");  
        sendData();      
    });
    // click = "seData()";
    
    

        
        // console.log(`First Naem :${fname.value}
        // last Name : ${lname.value}
        // emailId : ${emailID.value}
        // Password : ${passWord.value}`);
        
    
console.log(formEle);

}
function sendData(){
    var first = document.getElementById(first);
    console.log(first.value);
}


document.body.appendChild(formEle);
// console.log(formEle);
