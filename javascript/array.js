var names = ["ram", "krish", "ramkri"];
console.log(names);
console.log(typeof names);

// array is collection of different datatypes of data
var data = ["John", 28, true, undefined, null];
console.log(data);
console.log(typeof data);
console.log(typeof data[0]);
console.log(typeof data[1]);

// modified of arraye element
data[0] = "ram";
console.log(data);

data.push("krish");//add element at the end
data.unshift("krish");//add element at the begining
data.shift(); //remove begin element
console.log(data);

data.pop(); //remove element from last
console.log();

// splice
// spice
