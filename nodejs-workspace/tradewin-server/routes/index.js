const express = require('express');
const path = require('path');
const router = express.Router();
const homeCtrl = require('../controller/home.controller');

router
.route('/')
.get();

router
.route('/home')
.get();

module.exports = router;