//calculator using callback
// callback is nothing but 'a function pass as arguments in another function'
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function other(a, b) {
    return "Not Implemented";
}

var calc = function calc(num1, num2, callback) {
    var data = callback(num1, num2);
    console.log(data);
    console.log(typeof callback);   
}

calc(50, 40, add);
calc(30, 20, sub);
