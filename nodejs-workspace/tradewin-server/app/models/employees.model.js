'use strict';
const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
    Id: {
        type: String,
        unique: true
    },
    Department: String,
    Gender: String,
    Name: {
        type: String,
        required: true
    },
    Active: Boolean,
    PrimaryPhone: {
        Mobile: {
            type: String,
            maxLength: 10
        },
        Landline: String
    },
    emailId: {
        type: String,
        unique: true
    },
    EmployeeType: String,
    MetaData: {
        CreateTime: String,
        LastUpdatedTime: String
    },
    Address: {
        Line1: String,
        City: String,
        Country_Code: String,
        PostalCode: String
    },
    salary: Number
});

mongoose.model('Employees', employeeSchema, 'emp_data');