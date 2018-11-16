const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

module.exports.accountOpen = (req, res, next) => {
    if (!req.body || !req.body.emai_Id || !req.body.password || !req.body.balance) {
        res
            .status(404)
            .set('application/json')
            .json({
                msg: "required Fields are Missing"
            });
    } else {
        let saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        let hashPwd = bcrypt.hashSync(req.body.password, salt);

        var newAccount = new Accounts({
            name: req.body.name,
            age: req.body.age,
            password: hashPwd,
            gender: req.body.gender,
            ac_type: req.body.ac_type,
            emai_Id: req.body.emai_Id,
            status: req.body.status,
            balance: req.body.balance,
            phone: req.body.phone,
            address: req.body.address
        });

        newAccount
            .save(newAccount)
            .then(result => {
                res
                    .status(404)
                    .set('application/json')
                    .json({
                        auth: true,
                        msg: "Registration Success !",
                        newAccount: result
                    });
            })
            .catch(err => {
                res
                    .status(404)
                    .set('application/json')
                    .json({
                        auth: false,
                        msg: "Registration Failed !",
                        err: err
                    });
            });
    }
}

//LOGIN OF RK BANK
module.exports.loginAccount = (req, res, next) => {
    if (!req.body || !req.body.emai_Id || !req.body.password) {
        res
            .status(404)
            .set('application/json')
            .json({
                msg: "required Fields are Missing"
            });
    } else {
        Accounts
            .findOne({ emai_Id: req.body.emai_Id }, function (err, account) {
                if (err) {
                    res
                        .status(404)
                        .set('application/json')
                        .json({
                            msg: "User not Found!",
                            err: err
                        });

                } else {
                    if (!account) {
                        res
                            .status(500)
                            .set('application/json')
                            .json({
                                auth: false,
                                msg: "User not found",
                                err: "Please Register!",
                                account: account
                            });
                    } else {
                        //Checking Password
                        let isPwd = bcrypt.compareSync(req.body.password, account.password);

                        if (isPwd) {
                            let token = jwt.sign({emai_Id:account.emai_Id}, CONFIG.SECRETKEY, {expiresIn : '24h'})
                            res
                                .status(200)
                                .set('application/json')
                                .json({
                                    auth: true,
                                    msg: "login Success",
                                    token : token
                                });
                        } else {
                            res
                                .status(404)
                                .set('application/json')
                                .json({
                                    auth: false,
                                    msg: "Password not matched"
                                });
                        }
                    }
                }
            });
    }
}


//token validator
module.exports.tokenValidator = (req, res, next)=>{
        var token = req.headers['y-access-token-rama-krishna'];
        if(!token){
            res
            .status(404)
            .set('application/json')
            .json({
                msg: "Token Missing"
            });
        }else{
            jwt.verify(token, CONFIG.SECRETKEY, (err, doc)=>{
                if(err){
                    res
                    .status(401)
                    .set('application/json')
                    .json({
                        msg: "Failed to Authenticate Token Invalid"
                    });
                }else{
                    Accounts
                    .findOne({emai_Id : doc.emai_Id}, (err, user)=>{
                        if(err){
                            res
                            .status(401)
                            .set('application/json')
                            .json({
                                msg: "email not found",
                                err : err
                            });     
                        }else{
                            if(!user){
                                res
                                .status(401)
                                .set('application/json')
                                .json({
                                    msg: "email not found",
                                    err : "please signup"
                                });
                            }else{
                                // res
                                // .status(401)
                                // .set('application/json')
                                // .json({
                                //     msg: "Token validation success",
                                // });
                                next();
                            }
                        }
                    })
                }  
                
            });
        }
}