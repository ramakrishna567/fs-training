//importing mongodb Client
const MongoClient = require('mongodb').MongoClient
const CONFIG = require('../config');
var connection;

function open() {
    MongoClient.connect(CONFIG.DBURL, { authSource: CONFIG.AUTHSRC},
        function (err, client) {
            if (err) {
                console.log("mongodb connection failed !", err);
            } else {
                connection = client;
                console.log("mongodb connection success!");
            }
        });
}

function getConnection(){
    return connection;
}
module.exports = { 
    open : open,
    get : getConnection
}