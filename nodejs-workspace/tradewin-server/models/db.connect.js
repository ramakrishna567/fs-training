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

function gfshutdown (signal, callback){
    mongoose.connection.close(function(){
        console.log(`mongoose connection is DISCONNECTED BY APP Termination Signal : ${signal}`);
    callback();

    }); //destroyed pool connection
}

// process.on('SIGINT', ()=>{    
//         mongoose.connection.close(function(){
//             console.log(`mongoose connection is DISCONNECTED BY APP Termination Signal : SIGINIT`);
//             process.exit(0);
        
//         }); //destroyed pool connection
//         // console.log("sERVER shutdown due to SIGINT");
//     // process.exit(0);
// });

process.on('SIGINT', ()=>{
    gfshutdown('SIGINT', function(){
        // console.log("sERVER shutdown due to SIGINT");
        process.exit(0);
    })
});

process.on('SIGTERM', ()=>{
    console.log("SERVER shutdown due to SIGTERM");
    process.exit(0);
});

// process.once('SIGUSR2', ()=>{
//     console.log("SERVER shutdown due to SIGUSR2");
//     process.kill(process.pid, 'SIGUSR2');
// });  
