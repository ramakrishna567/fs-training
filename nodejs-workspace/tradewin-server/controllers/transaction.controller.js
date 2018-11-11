const mongoose = require('mongoose');
let Transactions = mongoose.model('Transactions');
let Accounts = mongoose.model('Accounts');

module.exports.depositTrans = function(req, res){
    depositAmount = req.body.depositAmount;
    accountNo = req.body.accountNo;
    Accounts.findById({_id : accountNo}, function(err, result){
        if(err){
            console.log(err);
        }
        afterBalance = {$add : ["$balance", depositAmount]}
        console.log(afterBalance);
         res
         .status(200)
         .json(afterBalance);
    });

    // Accounts
    // .updateMany({_id : accountNo}, {
    //     $set : {$add : {"$balance", accountNo}}
    // }, function(err, result){
    //     if(err){
    //         res
    //         .status(400)
    //         .send("transaction Failed");
    //     }
    //     else{
    //         res
    //         .status(200)
    //         .json(result);
    //     }
    // })
}