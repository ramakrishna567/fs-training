const connection = require("../models/db.connect");

exports.postData = (req, res, next)=>{
    
    var sql = "INSERT INTO customers (name, address) VALUES ?";

    // var name=req.body.name;
    var address=req.body.address;

    console.log(address);
    
    connection.query(sql, [address], function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log("1 record inserted", result);
        }
    });
}