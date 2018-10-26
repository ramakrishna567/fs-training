var fruits = ["apple", "Banana", "Mango", "Kiwi"];
console.log(fruits);
// for (let index = 0; index < fruits.length; index++) {
//     if (fruits[index] == "Kiwi") {
//         fruits[index] = "Pinepale";  
//     }
// }
// console.log(fruits);
// console.log(typeof fruits);
fruits.push("Lemon");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

delete fruits[2];
console.log(fruits);