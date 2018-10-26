var fs = require('fs');
fs.mkdir('../../../practise/nodejs/task1', function(error, data){
    if(error) throw error
    console.log("Path is wrong");
});
console.log("last statement");
