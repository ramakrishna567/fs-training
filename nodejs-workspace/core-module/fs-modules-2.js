var fs = require('fs');

fs.open('./data.log', 'r', function(error, data){
    if(error){
        console.log(error);        
    }
    var bffer = new Buffer(1024);
    fs.read(data,bffer,0,bffer.length,0, function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes>0){
            console.log(bytes);
            console.log(bffer.slice(0,bytes).toString());
        }
    });
    fs.close(data, function(err){
        if(err){
            console.log(err);
        }
    })
});