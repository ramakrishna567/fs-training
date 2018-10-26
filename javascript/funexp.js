// Noraml Function Syntax and Declaration
// function heroData() {
//     return console.log("Hi");
// }
// heroData();

// Function Expression Syntax and Declaration
// It is also a labeled function Expresion
var heroInfo = function heroData() {
    return console.log("Hi");
}
// heroData(); //You can't call like this we got error because it is Function Expression
console.log(heroInfo); // It shows Block of code of heroData
console.log(heroInfo()); // It shows Block of code of heroData

// Anonymous Function Epression
var heroInfo = function () {
    return console.log("Hi");
}
console.log(heroInfo); // It shows Block of code of heroInfo
console.log(heroInfo()); // It shows Block of code of heroInfo