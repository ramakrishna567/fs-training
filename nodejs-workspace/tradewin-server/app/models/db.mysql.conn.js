const mysql = require('mysql');
const CONFIG = require('../config');


const sql_options = {
    host: CONFIG.SQL_DBURL,
    user: CONFIG.SQL_DBUSER,
    password: CONFIG.SQL_DBPWD,
    database: CONFIG.SQL_DB
}

var connection = mysql.createConnection(sql_options);
connection.connect((err, con) => {
    if (err) {
        console.log("connection failed with MYSQL", err);
    } else {
        console.log("connection Success with MYSQL");
    }
})

module.exports=connection;