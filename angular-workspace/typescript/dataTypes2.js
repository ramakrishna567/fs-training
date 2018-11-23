//This function returns String type
function redLable() {
    return "Red Lable is Good";
    // return 200; // it gives error
}
function blueLabel() {
    console.log("Blue is Not Good");
    return 0;
}
var red = redLable();
var blue = blueLabel();
console.log(red);
console.log(typeof red);
console.log(blue);
console.log(typeof blue);
