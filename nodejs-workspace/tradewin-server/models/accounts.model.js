const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : Number,
    gender : String,
    ac_type : String,
    emai_Id : {
        type : String,
        unique : true
    },
    status : Boolean,
    balance : {
        prev_balance : Number,
        cur_balance : Number
    },
    trans_details:[String],
    date:{ type: Date, default: Date.now },
    phone : {
        primary : {
            type : Number,
            required : true
        },
        secondary : Number
    },
    address : {
        street : String,
        colony : String,
        city : String,
        pincode : Number
    }
});

mongoose.model('Accounts', accountSchema, 'accounts');