'use strict';

const Schema = require('mongoose').Schema;

let blogSchema = new Schema({
    title: {
        type: String,
        required: true // this is compulsory required field to go ahead
    },
    author: {
        type: String,
        unique: true, //this field is unique value so It has generated Index for this Field
        "default" : "Admin"
    },
    body: [{
        head: String,
        para: String,
        rating: {
            type: Number,
            min: 0,
            max: 5,
            "default": 2 //use default in double Quotes bcs it is already in Javascript
        }
    }],
    footer: {
        likes: Number,
        comments: String,
        createdOn: Data.now,
        share: String
    },
    rating: [
        {
            name: String,
            stars: Number,
            message: String
        }
    ]
});