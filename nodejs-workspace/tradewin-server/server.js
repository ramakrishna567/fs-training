"use strict";
// require('./models/db.connection').open(); // FOR MONGODB DRIVER
require('./app/models/db.connect'); // for mongoose third party framework
const CONFIG = require('./app/config');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const express = require('express');
const fs = require('fs');
// const routes = require('./app/routes/index');
const userRoutes = require('./app/routes/user.routes');
const productRoutes = require('./app/routes/product.routes');
// const eventRoutes = require('./app/routes/event.routes');
// const accountsRoutes = require('./app/routes/accounts.routes');
// const transRoutes = require('./app/routes/transactions.routes');
// const empRoutes = require('./app/routes/employees.routes');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const app = express();
// process.setMaxListeners(200);
log4js.configure('./app/config/log4js.json');
let startupLogger = log4js.getLogger('startup');
let accessLogger = log4js.getLogger('http');




// allows urlencoded data for parsing
app.use(bodyParser.urlencoded({ extended: false }));

//allows json data
app.use(bodyParser.json());

app.use(bodyParser.raw({ 'type': "application/json" })) //this is not recommended

// app.use(bodyParser.text({'type':"text/plain"})) // this is not recommended

//print every request in server.
app.use(function (req, res, next) {
    console.log(req.method, req.url);

    //allow cros origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Mrthods', 'POST, PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    //call next methods in pipeline
    next();
});

try {
    fs.mkdirSync('./logs');
} catch (error) {
    if (error.code != 'EEXIST') {
        console.log("Could not setup log Directory", error);
        process.exit(1);
    }
}

app.use(function (req, res, next) {
    console.log(req.method + "==" + req.url);
    accessLogger.info(req.method + "==" + req.url);
    next();
});

app.use(express.static('uploads'))
// app.use('/', routes);
app.use('/', userRoutes);
app.use('/api', productRoutes);
// app.use('/', eventRoutes);
// app.use('/', accountsRoutes);
// app.use('/', transRoutes);
// app.use('/', empRoutes);

// The cluster module allows easy creation of child processes
//  that all share server ports.

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running.. now`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {

    app.listen(CONFIG.PORT, CONFIG.HOST, function () {
        
        startupLogger.debug(`Server is Running at http://${CONFIG.HOST}:${CONFIG.PORT}`)
        // startupLogger.debug(`Magic Happened on Port: ${CONFIG.PORT}`);

        console.log(`Server is Running at http://${CONFIG.HOST}:${CONFIG.PORT}`);
        // console.log(`Magic Happened on Port: ${CONFIG.PORT}`);
    });

    console.log(`Worker ${process.pid} started`);

}
