const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');
const authCtrl = require('../middleware/auth.ctrl');
router
    .route('/users')
    .get(userCtrl.getUsers);
router
    .route('/registration')
    .post(userCtrl.userRegistration);

router
    .route('/login')
    .post(userCtrl.loginUser);

router
    .route('/auth')
    .get(authCtrl.tokenValidator);

router
    .route('/role')
    .post(authCtrl.roleValidator);

module.exports = router;