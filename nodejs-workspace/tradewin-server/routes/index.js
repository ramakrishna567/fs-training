const express = require('express');
const app = express();
const router = express.Router();
const homeCtrl = require('../controllers/home.controller');

router
.route('/')
.get(homeCtrl.rootReq);

router
.route('/home')
.get(homeCtrl.homeReq);

module.exports = router;