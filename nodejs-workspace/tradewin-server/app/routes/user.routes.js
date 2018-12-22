const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');
const authCtrl = require('../middleware/auth.ctrl');
router
    .route('/')
    .get(userCtrl.getUsers);
router
    .route('/new')
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

router
    .route('/update/:id')
    .put(userCtrl.updateUser)

    router
    .route('/delete/:id')
    .delete(userCtrl.deleteUser)

module.exports = router;