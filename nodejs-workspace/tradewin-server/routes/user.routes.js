const express = require('express');
const path = require('path');
const userCtrl = require('../controllers/home.controller');
const router = express.Router();

router
.route('/user')
.get(userCtrl.getUsers);

router
.route('/data')
.get(function (req, res) {
    console.log("GET request on /data");
    console.log(req.url + " " + req.method);
    res
        .status(200)
        .set('text/html')
        .sendFile(path.join)
});

module.exports = router;