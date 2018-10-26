let firstName = prompt("Enter First Name :");
if (firstName != '' && typeof firstName == 'string') {
    alert("Data is stored");
}
else {
    alert("enter valid name");
}

let lastName = prompt("Enter Last Name :");
if (firstName != '' && typeof firstName == 'string') {
    alert("Data is stored");
}
else {
    alert("enter valid name");
}

let mailId = prompt("Enter Mail Id :");

let pwd_1 = prompt("Enter Password :");

let pwd_2 = prompt("Enter Re-enter Password :");
if (pwd_1 == pwd_2) {
    alert("password is stored");
    console.log(`Your details are :
First Name : ${firstName}
Last Name : ${lastName}
Mail Id : ${mailId}
Password : ${pwd_2}`);
}
else {
    alert("Sorry! Data is not stored 'Agian Enter password' Thanks!");
    console.log(`Your details are :
First Name : ${firstName}
Last Name : ${lastName}
Mail Id : ${mailId}`);
}

