const  express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts.controller');

router
.route('/accounts/new')
.post(accountsCtrl.accountOpen);


router
.route('/accounts/:accountNo')
.get(accountsCtrl.findAccount);

 
module.exports = router;