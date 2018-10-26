var cart = [];
var fruitName = ["apple", "banana", "mango", "lemon", "orange", "others"];
var fruitCost = [30, 10, 20, 5, 15, 50];
var totalCost;
let fruitQuant;

var checkName = prompt("enter fruit Name :",`apple banana mango lemon orange others`);

for (index = 0; index < fruitName.length; index++) {
    if (checkName == fruitName[index]) {
        alert(`Cost of ${fruitName[index]} is : ${fruitCost[index]}`);
        fruitQuant = +prompt("How many fruits do you want?");
        totalCost = fruitCost[index] * fruitQuant;
        alert(`Total Cost about this is ${totalCost}`);
        var fruitPackage = [fruitName[index], fruitCost[index], fruitQuant, totalCost ]; 
        cart.push(fruitPackage);
    }
}
console.log(cart);
