var fs = require('fs');
// console.log(fs);

// console.log("start of the file");
// console.log("loading of the file");
// var data = fs.readFileSync('./op.js') // is synchronous method
// // console.log(data);
// console.log(data.toString());
// console.log(" file reading completed");


// console.log("start of the file");
// console.log("loading of the file");
// // var data = fs.readFile(path, 'callback') // is asynchronous file SYNTAX
// var data = fs.readFile('./op.js', function(error,data){  // is asynchronous file
//     if(error){
//         console.log(error);
//         console.log("error PRINTED");
//     }else{
//         console.log(data.toString());
//         console.log("file reading completed");
//     }
// }); 
// console.log("last staement");


 //WRITE FILE
//  var user = {
//      name : "john",
//      age : 25,
//      email : "john@gmail.com"
//  }
// console.log("start of the file");
// // fs.writeFileSync('data.txt', "writing fs module"); //synchronously
//  fs.writeFile('dataa.log', JSON.stringify(user), function(error, data){
//      if(error){
//          console.log(error);
//          console.log("error is PRINTED");
         
//      }
//      else{
//          console.log("writing file completed");
         
//      }
//  });

// console.log("last statement");


//  APPEND FILE
var user = {
    name: "john",
    age: 25,
    email: "john@gmail.com"
}
console.log("start of the file");
// fs.writeFileSync('data.txt', "writing fs module"); //synchronously
fs.writeFile('dataa.log', JSON.stringify(user), function (error, data) {
    if (error) {
        console.log(error);
        console.log("error is PRINTED");

    }
    else {
        console.log("writing file completed");

    }
});

console.log("last statement");