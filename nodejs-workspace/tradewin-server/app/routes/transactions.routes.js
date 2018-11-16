const express = require('express');
const router = express.Router();

const transCtrl = require('../controllers/transaction.controller');
const accountsCtrl = require('../controllers/accounts.controller');


router
.route('/accounts/deposit')
.put(accountsCtrl.tokenValidator, transCtrl.depositTrans);

// router
// .route('/accounts/withdraw')
// .put(transCtrl.withdrawTrans);

router
.route('/accounts/showBalance/:accountNo')
.get(accountsCtrl.tokenValidator,transCtrl.showBalance);

// router
// .route('/transactions/:transaction_id')
// .get(transCtrl.findTransaction)

module.exports = router;