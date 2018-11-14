const mongoose = require('mongoose');
const Users = mongoose.model('Users')
const bcrypt = require('bcrypt');

module.exports.userRegistration = function (req, res, next) {


    // console.log(req.body);

    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
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
            gender: req.body.gender
        })

        newuser
            .save(newuser)
            .then(user => {
                res
                    .status(200)
                    .set('application/json')
                    .json({
                        user: user,
                        auth: true
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
                    res
                        .status(200)
                        .set('application/json')
                        .json({
                            msg: "Login Successful!!"
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
                        err : err,
                        msg: "emial not found Please Signup!!",
                    });
            })
    }
}