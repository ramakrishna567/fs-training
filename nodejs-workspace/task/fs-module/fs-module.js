var fs = require('fs');

// fs.mkdir('../../../practise/nodejs', function(error, data){
//     if(error) throw error
//     console.log("Path is wrong");
// });
// console.log("last statement");

// CREATING DIRECTORIES task1, task2, task3
// fs.mkdir('../../../practise/nodejs/task3', function(error, data){
//     // fs.mkdir('../../../practise/nodejs/task2', function(error, data){
//     // fs.mkdir('../../../practise/nodejs/task1', function(error, data){
//     if(error) throw error
//     console.log("Path is wrong");
// });
// console.log("last statement");

//WRITE OR CREATING FILE data.txt

// fs.writeFile('../../../practise/nodejs/task1/data.txt', "some content", function(error, data){
//     if(error) {
//         console.log(error);
//     }
//     else{
//         console.log("data writing completed");
//     }
// });
// console.log("last statement");

//COPY A FILE
// fs.copyFile('../../../practise/nodejs/task1/data.txt', '../../../practise/nodejs/task2/data1.txt', function(error, data){
//     if(error) throw error
//     console.log("Path is wrong");
// });

// // MOVE A FILE
// fs.copyFile('../../../practise/nodejs/task2/data1.txt', '../../../practise/nodejs/task3/data1.txt', function(error, data){
//     if(error) throw error;
//     console.log("moved the file");
// });

// //APPEND FILE DATA
// fs.appendFile('../../../practise/nodejs/task3/data1.txt', "\n this content appended", function(error, data){
//     if(error) throw error;
//     console.log("\n data appended");
// });

// // REMOVE A FILE
// fs.unlinkSync('../../../practise/nodejs/task2/data2.txt');
// console.log("file removed");

// REMOVE A DIRECTORY
fs.rmdirSync('../../../practise/nodejs/task2');