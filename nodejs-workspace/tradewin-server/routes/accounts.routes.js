const  express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts.controller');
// const transCtrl = require('../controllers/transaction.controller');

router
.route('/accounts/new')
.post(accountsCtrl.accountOpen);

router
.route('/accounts/deposit')
.put(accountsCtrl.depositTrans);

router
.route('/accounts/withdraw')
.put(accountsCtrl.withdrawTrans);

router
.route('/accounts/:accountNo')
.get(accountsCtrl.findAccount);

router
.route('/accounts/showBalance/:accountNo')
.get(accountsCtrl.showBalance);

router
.route('/transactions/:transaction_id')
.get(accountsCtrl.findTransaction)
 
module.exports = router;