//This function returns String type
function redLable() {
    return "Red Lable is Good";
    // return 200; // it gives error
}
//Number return type
function blueLabel() {
    console.log("Blue is Not Good");
    return 0;
}
//Void return type
function greenLabel() {
    console.log("Blue is Not Good");
    // return undefined;
}
//we are not mention return type it automatically any returntype
function parameterTypes(name) {
    console.log("Blue is Not Good");
    console.log("hiiiii", !name);
    console.log(name);
    return name;
}
var red = redLable();
var blue = blueLabel();
console.log(red);
console.log(typeof red);
console.log(blue);
console.log(typeof blue);
console.log("returntype of " + typeof parameterTypes("rk"));
console.log(typeof greenLabel());
