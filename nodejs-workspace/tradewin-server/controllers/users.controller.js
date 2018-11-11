const mongoose = require('mongoose');

var Users = mongoose.model('Users')

module.exports.userRegistration = function (req, res, next) {
    Users.create(req.body, function (err, isreg) {
        if (err) {
            res
                .status(400)
                .send(err)
        } else {
            res
                .status(200)
                .json(isreg);
        }
    });
}


//login
module.exports.loginUser = function (req, res, next) {

    Users.findOne({ email: req.body.email, password: req.body.password }, function (err, result) {
        if (err) {
            console.log("login Failed!");
            res
                .status(404)
                .send("login error")
        }
        else if (!result) {
            res
                .status(404)
                .json("Login failed ! kindly register");
        } else {
            res
                .status(404)
                .json("login Success!!");
        }
    });
}