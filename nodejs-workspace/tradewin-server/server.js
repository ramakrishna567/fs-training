"use strict";

const express = require('express');
const routes = require('./routes/index');
const userRoutes = require('./routes//user.routes');
const productRoutes = require('./routes/product.routes');
const bodyParser = require('body-parser');

const app = express();
const port = '2020';
const host = '127.0.0.1';

app.use(bodyParser.urlencoded({extended:false}));
app.use('/', routes);
app.use('/', userRoutes);
app.use('/', productRoutes);

app.listen(port, host, function () {
    console.log(`Server is Running at http://${host}:${port}`);
    console.log(`Magic Happened on Port: ${port}`);
});
