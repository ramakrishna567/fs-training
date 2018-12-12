const mongoose = require('mongoose');
const mysql = require('mysql');
// const log4js = require('log4js');

const CONFIG = require('../config');
// log4js.configure('./app/config/log4js.json');
// let dbLogger = log4js.getLogger('db');



//require mongoose model => Register Model
require('./products.model');
require('./usersSchema.model');
// require('./accounts.model');
// require('./employees.model');
// require('./transactions.model'); 

const options = {
    user: CONFIG.DBUSR,
    pass: CONFIG.DBPWD,
    authSource: CONFIG.AUTHSRC,
    useNewUrlParser: true
}
const sql_options = {
    host: CONFIG.SQL_DBURL,
    user: CONFIG.SQL_DBUSER,
    password: CONFIG.SQL_DBPWD,
    database: CONFIG.SQL_DB
}

mongoose.connect(CONFIG.DBURL, options);
let db = mongoose.connection; //we are connect with connection is object

db.on('error', function () {
    // dbLogger.info("Db Connection Failed via MONGOOSE");
    console.log("Db Connection Failed via MONGOOSE");
    // console.log(error);
});

db.once('open', function () {
    // dbLogger.info("db connection successfull via MONGOOOSE");
    console.log("db connection successfull via MONGOOOSE");
});


var conn = mysql.createConnection(sql_options);
conn.connect((err, con) => {
    if (err) {
        console.log("connection failed with MYSQL", err);
    } else {
        console.log("connection Success with MYSQL");
    }
})
process.on('SIGINT', () => {
    gfshutdown('SIGINT', function () {
        process.exit(0);
    });
});

// process.once('SIGTERM', () => {
//     gfshutdown('SIGTERM', function () {
//         process.exit(0);
//     });
// });

// process.once('SIGUSR2', () => {
//     gfshutdown('SIGTERM', function () {
//    // console.log("SERVER shutdown due to SIGUSR2");
//    process.kill(process.pid, 'SIGUSR2');
//     });
// });

function gfshutdown(signal, callback) {
    mongoose.connection.close(function () {
        console.log(`mongoose connection is DISCONNECTED BY APP Termination Signal : ${signal}`);
        // dbLogger.error(`mongoose connection is DISCONNECTED BY APP Termination Signal : ${signal}`);
        callback();
    }); //destroyed pool connection
}