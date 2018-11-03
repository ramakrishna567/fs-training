// "use strict";
require('./models/db.connection')
const express = require('express');
const routes = require('./routes/index');
const userRoutes = require('./routes//user.routes');
const productRoutes = require('./routes/product.routes');
const eventRoutes = require('./routes/event.routes');
const bodyParser = require('body-parser');

const app = express();
const port = '2020';
const host = '127.0.0.1';

// allows urlencoded data for parsing
app.use(bodyParser.urlencoded({extended:false}));

//allows json data
app.use(bodyParser.json());

// app.use(bodyParser.raw({'type':"text/plain"})) //this is not recommended

// app.use(bodyParser.text({'type':"text/plain"})) // this is not recommended

app.use('/', routes);
app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', eventRoutes);

app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
    console.log(`Magic Happened on Port: ${port}`);
});
