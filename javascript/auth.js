var records = new Array();
alert(`Welcome to My App !`);

while(true)
{
var options = prompt(`Select one option
1. Registration
2. Login
3. exit/logout`);
if(options === '1' || options === 'registration'
|| options === '2' || options === 'login'){
    switch (options) {
        case '1': case 'registration':
            console.log("Registration selected");
            var name = prompt("enter your name");
            var email = prompt("enter your email");
            var phone = prompt("enter your phone");
            var password = prompt("enter your password");
            var user = new Object();
            user.name = name;
            user.email = email;
            user.password = password;
            console.log(user);
            records.push(user);
            alert("Registration is done you can choose login")
            break;
        case '2': case 'login':
          for(index in records){
            // console.log(records[index]);
            var email = prompt("enter your email");
            var password = prompt("enter your password");
            if(email == records[index].email && password == records[index].password)
            {
            alert("login successful");            
            }
            else{
                alert("login failed! try again");
            }

          }            
            break;
        case '3': case 'exit' : case 'logout' : 
                console.log("Invalid Option");
                break;
        default:
            console.log("Invalid Option");
            
    }
}
else{
    console.log("Invalid Option");
    break;
}
}
