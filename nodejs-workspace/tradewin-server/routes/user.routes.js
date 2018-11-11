const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');


router
    .route('/registration')
    .post(userCtrl.userRegistration);

router
    .route('/login')
    .post(userCtrl.loginUser);

module.exports = router;