const express = require("express");
const router = express.Router();
const personsCtrl = require("../controllers/persons.ctrl");

router
.route('/data')
.post(personsCtrl.postData);

router
.route('/getdata')
.get(personsCtrl.getData);

router
.route('/update')
.put(personsCtrl.updateCustomer);

router
.route('/customers/:name')
.get(personsCtrl.getOneCustomer);

router
.route('/customers/:name')
.delete(personsCtrl.deleteOneCustomer);



module.exports = router;