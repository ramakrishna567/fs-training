'use strict';

const Schema = require('mongoose').Schema;

let bodySchema = new Schema({
    head: String,
    para: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
        "default": 2 //use default in double Quotes bcs it is already in Javascript
    }
});

let footerSchema = new Schema({
    likes: Number,
    comments: String,
    createdOn: Data.now,
    share: String
})
let blogSchema = new Schema({
    title: {
        type: String,
        required: true // this is compulsory required field to go ahead
    },
    author: {
        type: String,
        unique: true, //this field is unique value so It has generated Index for this Field
        "default": "Admin"
    },
    body: [bodySchema], // this childSchema it is recommended
    footer: footerSchema,
    rating: [ // It is also childSchema but it is not recommended
        {
            name: String,
            stars: Number,
            message: String
        }
    ]
});
// mongoose.model(ModelObjectName, Schema, collectionName); // syntax of MODEL
mongoose.model('Blog', bodySchema); 
