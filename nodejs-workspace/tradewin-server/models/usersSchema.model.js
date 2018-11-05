'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema // it is a constructor function

// const Schema = require('mongoose').Schema // this is same as above recommended this

let usersSchema = new Schema({
    name : String,
    type : String,
    email : String,
    password : String,
    address : [String],
    phoneNumber : String,
    activeStatus : Boolean,
    gender : String
});
