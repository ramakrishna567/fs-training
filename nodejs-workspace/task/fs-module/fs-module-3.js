const fs = require('fs');
fs.chmod('./transactions.js', 760, function(error){
    if(error) throw error;
    console.log("mode changed");
} );

// //change of owner
// fs.chown('./transactions.js', 1000, 1000, function(error){
//     if(error) throw error;
//     console.log("owner changed");
// } );