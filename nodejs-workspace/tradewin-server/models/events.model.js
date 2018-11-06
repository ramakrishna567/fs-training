'use strict';
const Schema = require('mongoose').Schema;
let eventSchema = new Schema({
    event_name: {
        type : String,
        required : true
    },
    event_cost: Number,
    start_date: Date,
    end_date: Date,
    address: String,
    materials: String
});