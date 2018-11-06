const mongoose = require('mongoose');

let subSchema = mongoose.Schema({
    name : String,
    image : String,
    date : String,
    model : String,
    price : String,
    location : String,
    details : String
})

let subcategorySchema = mongoose.Schema({
    _id : String,
    name : String,
    image : String,
    sub : [subSchema]
})

const productSchema = mongoose.Schema ({
    name : {
        type : String,
        require : true
    },
    image : String,
    subcategory : [subcategorySchema]
})

mongoose.model('Product', productSchema, 'productdetails');