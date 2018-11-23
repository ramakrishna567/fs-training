const mongoose = require('mongoose');
const Users = mongoose.model('Users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');
// const log4js = require('log4js');

// log4js.configure('./app/config/log4js.json');
// let userLogger = log4js.getLogger('user');
// let errorLogger = log4js.getLogger('logLevelFilter');

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
        // userLogger.warn("Required fields are missing For Registration");
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
                // errorLogger.error("User Registration Successful")
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
                // errorLogger.error("Registration Failed", err);
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
        // userLogger.error("Required fields are missing For Login");
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
                        // userLogger.info("User Login Successful");
                } else {
                    res
                        .status(400)
                        .set('application/json')
                        .json({
                            msg: "Password not matched",
                        });
                        // userLogger.warn("User Password Mismatched");
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
                    // userLogger.warn("Emial not found Please Signup!!");
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