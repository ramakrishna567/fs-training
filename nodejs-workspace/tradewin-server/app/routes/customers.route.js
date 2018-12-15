const express = require("express");
const router = express.Router();
const personsCtrl = require("../controllers/customers.ctrl");
const authCtrl = require("../middleware/customers.auth");

router
.route('/customers')
.get(personsCtrl.getData);

router
.route('/customers/new')
.post(personsCtrl.postData);

router
.route('/customers/update')
.put(personsCtrl.updateCustomer);

router
.route('/customers/:name')
.get(personsCtrl.getOneCustomer);

router
.route('/customers/delete:name')
.delete(personsCtrl.deleteOneCustomer);

router
.route('/registraion')
.post(authCtrl.custRegistraion);

router
.route('/login')
.post(authCtrl.loginCustomer);


module.exports = router;