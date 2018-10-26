try {
    let name = prompt("Enter your Name:");
    if (name == '' || name == 'null' || name == 'undefined' || name.length > 10) {
        throw `enter your name less than ten characters
        or not enter null
        or not entered undefined or empty string`
    }
    else {
        console.log("Your name is :", name);
    }
} catch (error) {
    console.log(error);
    
}
let ph = +prompt("Enter Your Phone Number :");
try
{
    if(isNaN(ph)){
    throw "enter phone must be numbers"
}
else{
    console.log("you entered phone number is :",ph);
}
}catch(err){
    console.log(err);
}

let fname = prompt("enter your first name");
if( (fname>='a' && fname<='z') || (fname>='A' && fname<='Z')){
    console.log("you have enter first name", fname);
}
else{
    console.log("enter fname must be alphabets");
}