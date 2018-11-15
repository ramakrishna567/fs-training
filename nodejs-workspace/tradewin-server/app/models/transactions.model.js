const mongoose = require('mongoose');
// var ObjectId = mongoose.Schema.Types.ObjectId;

let transactionSchema = mongoose.Schema({
    ac_id : String,
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
        },
        secondary : Number
    }
});

mongoose.model("Transactions", transactionSchema, 'transactions');