'use strict';
const Schema = require('mongoose').Schema;
let empSchema = new Schema({
    empId: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    mailId: {
        type: String,
        unique: true
    },
    department: String,
    phNo: [{ primary: Number }, { secondary: Number }],
    address: {
        flate: String,
        street: String,
        city: String,
        pin: Number
    }
});