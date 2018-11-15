const express = require('express');
const router = express.Router();

const transCtrl = require('../controllers/transaction.controller');

router
.route('/accounts/deposit')
.put(accountsCtrl.depositTrans);

router
.route('/accounts/withdraw')
.put(accountsCtrl.withdrawTrans);

router
.route('/accounts/showBalance/:accountNo')
.get(accountsCtrl.showBalance);

router
.route('/transactions/:transaction_id')
.get(accountsCtrl.findTransaction)

module.exports = router;