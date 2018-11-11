const express = require('express');
const router = express.Router();
let empCtrl = require('../controllers/employee.controller');

router
.route('/employees/new')
.post(empCtrl.joinEmployee);

router
.route('/pipeline')
.get(empCtrl.aggregationPipeline)

router
.route('/mapreduce')
.get(empCtrl.mapReduceAgg);

module.exports = router;