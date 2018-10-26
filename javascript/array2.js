// splice method do adding elements and deleting elements at random position
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1); //where 2 is position of add element and 1 is deleting element count at 2position 
console.log(fruits);

// concat () method merge two arrays
var myGirls = ["seetha", "geetha"];
var myBoys = ["krishna", "rama", "bheema"];
var myFamily = ["I", "Wife"];
// var myChildren = myGirls.concat(myBoys);
// var myChildren = myBoys.concat(myGirls);
var family = myFamily.concat(myBoys, myGirls);
console.log(family);

// slice() method slices out a piece of an array into a new array.
var we = family.slice(2,5); //starts from zero but ends before 2 means it takes 0,1 indexes
console.log("slic array :", we);

  