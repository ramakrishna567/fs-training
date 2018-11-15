const mongoose = require('mongoose');
const Users = mongoose.model('Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

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
                // var token = jwt.sign({ _id: user._id }, CONFIG.SECRETKEY, { expiresIn: '24h' });
                res
                    .status(200)
                    .set('application/json')
                    .json({
                        user: user,
                        auth: true,
                        msg: "Registration Successful",
                        // token: token // FOR AUTO LOGIN AFTER REGISTRATION
                    });
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
    } else {
        Users
            .findOne({ email: req.body.email })
            .then(user => {
                var isPwd = bcrypt.compareSync(req.body.password, user.password)
                console.log(isPwd);

                if (isPwd) {
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
                } else {
                    res
                        .status(400)
                        .set('application/json')
                        .json({
                            msg: "Password not matched",
                        });
                }
            })
            .catch(err => {
                res
                    .status(400)
                    .set('application/json')
                    .json({
                        err: err,
                        msg: "emial not found Please Signup!!",
                    });
            })
    }
}

module.exports.tokenValidator = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token) {
        res
            .status(404)
            .set('application/json')
            .json({
                auth: false,
                message: "Failed to Authenticate token not found!",
                token: null
            });
    } else {
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
            } else {
                Users
                    .findById({ _id: doc._id }, function (err, user) {
                        if (err) {
                            res
                                .status(400)
                                .set('application/json')
                                .json({
                                    err: err,
                                    msg: "emial not found Please Signup!!",
                                });
                        } if (!user) {
                            res
                                .status(500)
                                .set('application/json')
                                .json({
                                    err: "server error",
                                    msg: "emial not found Please Signup!!",
                                });
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