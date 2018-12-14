const express = require("express");
const router = express.Router();
const personsCtrl = require("../controllers/persons.ctrl");

router
.route('/data')
.post(personsCtrl.postData);

module.exports = router;