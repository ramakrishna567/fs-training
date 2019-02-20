var obj = {};
var obj2 = new Object();

var arr = [];
obj.name = "ram";
obj.age = 25;
obj.email = "ram@gmail.com"
// console.log(obj);
delete obj.email;
console.log(obj);
for(key in obj){
    arr.push(key);
}
console.log(arr);
console.log(Array.isArray(obj2));

