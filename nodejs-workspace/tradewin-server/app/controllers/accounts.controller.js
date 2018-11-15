const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');
const Transactions = mongoose.model('Transactions')

try {
    module.exports.accountOpen = (req, res, next) => {
        var date = new Date();

        Accounts.create(req.body, (err, account) => {
            if (err) {
                console.log("error infomation", err);
                res
                    .status(404)
                    .send("Your account is failed!");
            }
            else {
                res
                    .status(200)
                    .send("Your account is opened!");
                console.log(account);
            }
        });
    }
}
catch (err) {
    console.log(err);
}

//FIND ACCOUNT
module.exports.findAccount = (req, res)=>{
    accountNo = req.params.accountNo;
    Accounts.findById({_id: accountNo}, (err, account)=>{
        if(err){
            res
            .status(400)
            .send("Your account does not find");
        }else{
            res
            .status(200)
            .json(account)
        }
    });
}
