const mongoose = require('mongoose');
const CONFIG = require('../config');

//require mongoose model => Register Model
require('./products.model');
require('./usersSchema.model');
require('./accounts.model');
require('./employees.model');
require('./transactions.model');

const options = {
    user: CONFIG.DBUSR,
    pass: CONFIG.DBPWD,
    authSource: CONFIG.AUTHSRC,
    useNewUrlParser: true
}

mongoose.connect(CONFIG.DBURL, options);
let db = mongoose.connection; //we are connect with connection is object

db.on('error', function () {
    console.log("Db Connection Failed via MONGOOSE");
    // console.log(error);
});

db.once('open', function () {
    console.log("db connection successfull via MONGOOOSE");
});

