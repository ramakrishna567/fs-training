//importing mongodb Client
const MongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://ramakrishna567:ramki567@127.0.0.1:27017/krishna_medical';
MongoClient.connect(dbUrl,{authSource:'admin'}, 
function(err, client){
if(err){
    console.err("mongodb connection failed !", err);
}else{
    console.log("mongodb connection success!");
}
});