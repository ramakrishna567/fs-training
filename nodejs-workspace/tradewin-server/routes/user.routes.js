const express = require('express');
const path = require('path');
const userCtrl = require('../controllers/users.controller');
const router = express.Router();

router
.route('/user')
.get(userCtrl.getUsers); 

module.exports = router;