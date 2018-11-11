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
                        .insertMany(newTrans,
                            { safe: true, upsert: true, new: true }, function (err, trans) {
                                if (err) {
                                    res
                                        .status(400)
                                        .send("transaction details not send");
                                        console.log(err);
                                        
                                } else {
                                    console.log("id field"+trans._id);
                                    
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

