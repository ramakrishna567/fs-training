
const mongoose = require('mongoose');
// const Schema = mongoose.Schema // it is a constructor function

// const Schema = require('mongoose').Schema // this is same as above recommended this

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
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

mongoose.model('Users', usersSchema, 'users');