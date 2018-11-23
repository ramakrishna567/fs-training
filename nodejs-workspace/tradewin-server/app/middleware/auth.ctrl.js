const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');
const log4js = require('log4js');

log4js.configure('./app/config/log4js.json');
let userLogger = log4js.getLogger('user');
let errorLogger = log4js.getLogger('logLevelFilter');

module.exports.tokenValidator = (req, res, next) => {
    var token = req.headers['x-access-token'];
    console.log(token);

    if (!token) {
        res
            .status(404)
            .set('application/json')
            .json({
                auth: false,
                message: "Failed to Authenticate  not found!",
                token: null
            });
        console.log("token", token);
        userLogger.error("Failed to Authenticate token not found!")
    } else {
        //TOKEN VERIFICATION
        jwt.verify(token, CONFIG.SECRETKEY, function (err, doc) {
            if (err) {
                res
                    .status(401)
                    .set('application/json')
                    .json({
                        auth: false,
                        message: "Failed to Authenticate, Token Invalid !",
                        token: null
                    });
                userLogger.error("Failed to Authenticate, Token Invalid !")
            } else {
                Users
                    .findById({ _id: doc._id }, function (err, user) {
                        if (err) {
                            res
                                .status(400)
                                .set('application/json')
                                .json({
                                    err: err,
                                    msg: "Email not found Please Signup!!",
                                });
                            userLogger.info("Email not found Please Signup!!");
                        } if (!user) {
                            res
                                .status(500)
                                .set('application/json')
                                .json({
                                    err: "server error",
                                    msg: "emial not found Please Signup!!",
                                });
                            userLogger.info("Email not found Please Signup!!");

                        } else {
                            // res
                            //     .status(200)
                            //     .set('application/json')
                            //     .json({
                            //         auth: true,
                            //         message: "Valid token! Authorised",
                            //         token: user

                            //CALL FUNCTION AFTER EVALAUTION
                            next();
                            // });
                        }
                    });
                // res
                // .status(200)
                // .set('application/json')
                // .json({
                //     auth : true,
                //     message : "Valid token! Authorised",
                //     token : doc
                // });
            }
        })
    }
}


//ROLE VALIDATOR
module.exports.roleValidator = (req, res, next) => {
    if (!req.body || !req.body.email || !req.body.password) {
        res
            .status(400)
            .set('application/json')
            .json({
                err: "Server error",
                msg: "Required fields are missing"
            });
    } else {
        Users
            .findOne({ email: req.body.email })
            .then(user => {

                if (!user) {
                    res
                        .status(200)
                        .set('application/json')
                        .json({
                            msg: "user not found"
                        });
                } else {
                    var isPwd = bcrypt.compareSync(req.body.password, user.password);
                    if (isPwd) {
                        if (user.role === 'admin') {
                            res
                                .status(200)
                                .set('application/json')
                                .json({
                                    msg: "You have ADMIN role"
                                });
                        } else if (user.role === 'user') {
                            res
                                .status(200)
                                .set('application/json')
                                .json({
                                    msg: "You have USER role"
                                });
                        }
                        else {
                            res
                                .status(200)
                                .set('application/json')
                                .json({
                                    msg: "You DO NOT have role"
                                });
                        }
                    }
                }
            })
            .catch(err => {
                res
                    .status(400)
                    .set('application/json')
                    .json({
                        err: err,
                        msg: "user not found"
                    });
                    errorLogger.error("user not found")
            })
    }
}