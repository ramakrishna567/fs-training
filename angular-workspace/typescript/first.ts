//Every Typescript programs converts to Javascript code - Transpilation
// Means Every Typescript code is valid code for Javascript

console.log("Hello welocme to Typescript");
var user = {
    name : "john",
    age : 25,
    email : "john123@gmail.com"

}

function showData(){
    if(user.name){
        console.log(user.name);
    }else{
        console.log(user);
    }
}

var changeName = function (name){
    if(name){
        user.name = name;
        console.log("new name", user.name);
    }else{
        console.log("name is required");
    }
}

showData();
changeName("david");