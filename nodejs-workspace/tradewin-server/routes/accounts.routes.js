const  express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts.controller');
const TransCtrl = require('../controllers/transaction.controller');

router
.route('/accounts/new')
.post(accountsCtrl.accountOpen);

router
.route('/accounts/deposit')
.put(accountsCtrl.depositTrans);
 
module.exports = router;