function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}
function other(a,b){
    return "not Implemented";
}
let calc = (num1, num2, callback)=>{
    if(typeof callback == 'function')
    {
        return callback(num1,num2);
    }
    else{
        console.log("calculation type should be a function");
        
    }
}

console.log(calc(40,20,add));
console.log(calc(40,20,mul));
console.log(calc(40,20,other));
