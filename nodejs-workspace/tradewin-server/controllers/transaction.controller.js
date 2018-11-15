const mongoose = require('mongoose');
let Transactions = mongoose.model('Transactions');
let Accounts = mongoose.model('Accounts');


//SHOW BALANCE
module.exports.showBalance = (req, res)=>{
    accountNo = req.params.accountNo;
    Accounts
    .findById({_id:accountNo}, {"balance" : true, _id:0})
    .exec((err, account)=>{
        if(err){
            res
            .status(400)
            
            .send("Your account does not find");
            console.log(err);
            
        }else{
            res
            .status(200)
            .json(account)
        }
    })
}


module.exports.depositTrans = function (req, res) {
    depositAmount = req.body.depositAmount;
    accountNo = req.body.accountNo;

    Accounts.findOne({ _id: accountNo }, function (err, account) {
        if (err) {
            res
                .status(404)
                .send("account not found");
            console.log(err);
        } else {

            account.balance.prev_balance = account.balance.cur_balance;
            account.balance.cur_balance = account.balance.cur_balance+this.depositAmount ;

            account.save((err, docc) => {
                if (err) {
                    console.log(err);
                    res
                        .status(404)
                        .send("transaction failed")
                } else {

                    let newTrans = {
                        ac_id : account._id,
                        tr_amount: this.depositTrans,
                        name: account.name,
                        ac_type: account.ac_type,
                        tr_name: "deposit",
                        mode: "online",
                        prev_balance: account.balance.prev_balance,
                        cur_balance: account.balance.cur_balance,
                        status: account.status,
                        emai_Id: account.emai_Id,
                        phone: account.phone
                    }

                    Transactions
                        .create(newTrans,
                            { safe: true, upsert: true, new: true }, function (err, trans) {
                                if (err) {
                                    res
                                        .status(400)
                                        .send("transaction details not send");
                                        console.log(err);                                        
                                } else {
                                    console.log("id field",trans);
                                    
                                    Accounts
                                    .findOneAndUpdate({_id:account._id},{
                                        $push : {trans_details : trans._id}
                                    }, function(err, result){
                                        if(err){
                                            res
                                            .status(400)
                                            .send("historied are saved");
                                            console.log(err);
                                            
                                        }else{
                                            res
                                            .status(200)
                                            .json(result)
                                            console.log(result);
                                            
                                        }
                                    });
                                    // res
                                    //     .status(200)
                                    //     .json(trans)
                                }
                            });
                    // res
                    //     .status(200)
                    //     .send("accoount is updated");
                    // console.log(docc);
                }
            });
            // res
            // .status(404)
            // .send("accoount is found");
            // console.log(account);
        }
    });
}

// FINDING TRANSACTION IN TRANSACTION HISTORIES
module.exports.findTransaction = function(req, res){
let transaction_id = req.params.transaction_id;
    Transactions.findById({_id : transaction_id}, (err, all)=>{
        if(err){
            res
            .status(400)
            .send("err while finding")
        }else{
            res
            .status(400)
            .json(all)
            console.log(all);

            // for(let index = 0; index<= all.length; index++){
            //     if(all[index]._id == transaction_id){
            //         console.log("your transaction found");
            //     }else{
            //         console.log("your transaction doesn't find");
            //     }
            // }
        }
    });
}
