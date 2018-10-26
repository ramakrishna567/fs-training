// console.log("I am App.js File");
var msg = "This is the Msg for Lokhkalyan";

var names = ['John', 'Rohn', 'David'];

var john = {
    name : "John",
    age : 29,
    isMarried : true
}

var showMsg = (names, age,msg)=>{
    console.log(`Welcome ${names}
    Your age is ${age} and
    For you a Msg : ${msg}`);
}
var run = (names, age,msg)=>{
    console.log(`Welcome ${names}
    Your age is ${age} and
    For you a Msg : ${msg}`);
}

var obj = {
    names : names,
    john : john,
    msg : msg,
    showMsg : showMsg,
    run : run
}

// module.exports = msg;
// module.exports = names;
// module.exports = john; // only this exports
// module.exports = obj; // only this exports

module.exports = obj; // only this exports