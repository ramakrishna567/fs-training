var fs = require('fs');

fs.open('../modules/sample.js', 'w+', function(error, data){
    if(error){
        console.log(error);        
    }
    var bffer = new Buffer.alloc(1000);
    fs.write(data,bffer,0,bffer.length,0, function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes>0){
            console.log(bytes);
            console.log(bffer.toString());
        }
    });
    fs.close(data, function(err){
        if(err){
            console.log(err);
        }
    });
});