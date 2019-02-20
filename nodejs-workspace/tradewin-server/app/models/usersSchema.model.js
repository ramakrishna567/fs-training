
const mongoose = require('mongoose');
// const Schema = mongoose.Schema // it is a constructor function

// const Schema = require('mongoose').Schema // this is same as above recommended this

const usersSchema = mongoose.Schema({
    method : {
        type : String,
        enum : ["google", "facebook"],
        required : true
    },
    google : {
        id : {
            type : String
        },
        email : {
            type : String,
            lowercase : true
        }
    },
    facebook : {
        id : {
            type : String
        },
        email : {
            type : String,
            lowercase : true
        }
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: String,
    role : String,
    address: [String],
    phoneNumber: {
        type: String,
        maxlength: 10
    },
    activeStatus: Boolean,
    gender: String
});
module.exports = mongoose.model('Users', usersSchema, 'users');