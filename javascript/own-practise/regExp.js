
var str = "my name is ramakrishna"
console.log(str);

// var result = str.search(/r/i);
// var result = str.replace("ram", "rk");

// var patt = /[a-k]/g // find letters in string it returns array
// var patt = /[0-9]/g //find numbers in the string
// var patt = /[a/r]/g //find alternative strings
// var result = str.match(patt);

//find digits in givrn string now it returns 1,0,0
var str = "Give 10203"; 
var patt1 = /\d/g;
var result = str.match(patt1);

// find WHITESPACES in given string it returns  FOUR empty spaces
var str = "Is this all there is?";
var patt1 = /\s/g;
var result = str.match(patt1);

console.log(result);
