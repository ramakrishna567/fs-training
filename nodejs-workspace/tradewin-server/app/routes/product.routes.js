const express = require('express');
const prodCtrl = require('../controllers/products.controller');
const authCtrl = require('../controllers/users.controller');
const router = express.Router();

router
.route('/products')
.get(authCtrl.tokenValidator,prodCtrl.getAllProducts);

router
.route('/api/products/new')
.post(prodCtrl.addOneProduct);

router
.route('/products/:productId')
.get(prodCtrl.getOneProduct);

// update 
router
.route('/api/products/update/:productId')
.put(prodCtrl.updateOneProduct);

//delete a document
router
.route('/api/products/delete/:productId')
.delete(prodCtrl.deleteOne);

module.exports = router;