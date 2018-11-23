const  express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts.controller');

router
.route('/accounts/new')
.post(accountsCtrl.accountOpen);

router
.route('/accounts/login')
.post(accountsCtrl.loginAccount);

router
.route('/accounts/auth')
.post(accountsCtrl.tokenValidator);

module.exports = router;