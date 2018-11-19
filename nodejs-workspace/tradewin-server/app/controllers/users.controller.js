const mongoose = require('mongoose');
const Users = mongoose.model('Users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');
const log4js = require('log4js');

log4js.configure('./app/config/log4js.json');
let userLogger = log4js.getLogger('user');
let errorLogger = log4js.getLogger('logLevelFilter');

module.exports.userRegistration = function (req, res, next) {
    // console.log(req.body);
    if (!req.body || !req.body.name || !req.body.email || !req.body.password || !req.body.role) {
        res
            .status(400)
            .set('application/json')
            .json({
                err: "Server error",
                msg: "Required fields are missing"
            });
        userLogger.warn("Required fields are missing For Registration");
    } else {
        //PASSWORD ENCRYPTION
        const saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds)
        var hashPwd = bcrypt.hashSync(req.body.password, salt);

        var newuser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashPwd, // ASSIGN ENCRYPTED PASSWORD
            phoneNumber: req.body.phoneNumber,
            activeStatus: req.body.activeStatus,
            gender: req.body.gender,
            role: req.body.role
        });

        newuser
            .save(newuser)
            .then(user => {
                var token = jwt.sign({ _id: user._id }, CONFIG.SECRETKEY, { expiresIn: '24h' });
                res
                    .status(200)
                    .set('application/json')
                    .json({
                        user: user,
                        auth: true,
                        msg: "Registration Successful",
                        // token: token // FOR AUTO LOGIN AFTER REGISTRATION
                    });
                errorLogger.error("User Registration Successful")
            })
            .catch(err => {
                res
                    .status(400)
                    .set('application/json')
                    .json({
                        err: "Server error",
                        msg: "Registration Failed",
                        errr: err
                    });
                errorLogger.error("Registration Failed", err);
            });
    }
}


//LOGIN
module.exports.loginUser = function (req, res, next) {
    //PASSWORD DECRYPTION N COMPARISION
    if (!req.body || !req.body.email || !req.body.password) {
        res
            .status(500)
            .set('application/json')
            .json({
                err: "Server error",
                msg: "Required fields missing",
            });
        userLogger.error("Required fields are missing For Login");
    } else {
        Users
            .findOne({ email: req.body.email })
            .then(user => {
                var isPwd = bcrypt.compareSync(req.body.password, user.password)
                console.log(isPwd);
                if (isPwd) {
                    //TOKEN GENERATION ALONG WITH ID
                    // jwt.sign(payload, secretkey, options);
                    var token = jwt.sign({ _id: user._id }, CONFIG.SECRETKEY, { expiresIn: '24h' });
                    res
                        .status(200)
                        .set('application/json')
                        .json({
                            msg: "Login Successful!!",
                            // user : user,
                            token: token
                        });
                        userLogger.info("User Login Successful");
                } else {
                    res
                        .status(400)
                        .set('application/json')
                        .json({
                            msg: "Password not matched",
                        });
                        userLogger.warn("User Password Mismatched");
                }
            })
            .catch(err => {
                res
                    .status(400)
                    .set('application/json')
                    .json({
                        err: err,
                        msg: "Email not found Please Signup!!",
                    });
                    userLogger.warn("Emial not found Please Signup!!");
            })
    }
}

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
            console.log("token",token);            
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
            })
    }
}


module.exports.getUsers = (req, res, next) => {
    Users
        .find()
        .exec((err, users) => {
            if (err) {
                res
                    .status(404)
                    .json({
                        err: err,
                        message: "internal Server error"
                    })
            } else {
                res
                    .status(404)
                    .json(users);
            }
        })
}