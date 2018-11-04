//importing mongodb Client
const MongoClient = require('mongodb').MongoClient
const CONFIG = require('../config');

MongoClient.connect(CONFIG.DBURL, { authSource: CONFIG.AUTHSRC },
    function (err, client) {
        if (err) {
            console.log("mongodb connection failed !", err);
        } else {
            console.log("mongodb connection success!");
        }
    });