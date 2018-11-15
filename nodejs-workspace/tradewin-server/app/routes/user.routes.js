const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');


router 
    .route('/registration')
    .post(userCtrl.userRegistration);

router
    .route('/login')
    .post(userCtrl.loginUser);

    router
    .route('/auth')
    .get(userCtrl.tokenValidator);

    router
    .route('/role')
    .post(userCtrl.roleValidator);

module.exports = router;