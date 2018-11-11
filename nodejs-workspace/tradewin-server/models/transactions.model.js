const mongoose = require('mongoose');


let transactionSchema = mongoose.Schema({
    // _id : String,
    tr_amount : Number,
    name : String,
    ac_type : String,
    tr_name : String,
    mode : String,
    prev_balance : Number,
    cur_balance : Number,
    tr_time : Date,
    status : Boolean,
    emai_Id : String,
    phone : {
        primary : {
            type : Number,
            required : true
        },
        secondary : Number
    }
});

mongoose.model("Transactions", transactionSchema, 'transactions');