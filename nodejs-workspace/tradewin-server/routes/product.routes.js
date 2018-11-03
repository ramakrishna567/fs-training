const express = require('express');
const path = require('path');
const prodCtrl = require('../controllers/products.controller');
const router = express.Router();

router
.route('/api/products')
.get(prodCtrl.getAllProducts);

router
.route('/api/products/new')
.post(prodCtrl.addOneProduct);

// params maps always at end
router
.route('/api/products/:productId')
.get(prodCtrl.getoneProduct);

module.exports = router;