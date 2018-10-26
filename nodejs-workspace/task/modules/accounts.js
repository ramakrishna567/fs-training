var records = require('./accData.js');
// user verification
// console.log(records[1].ac_no);
var userVerify = (accountNo)=>{
var account = 0;
    if (account <= records.accounts.length) {        
        for (; account < records.accounts.length;) {
            if (accountNo == records.accounts[account].ac_no) {
                    console.log("login successfull");
                    return account;
                }            
            ++account;
            // console.log(account);
        }        
        // if (account > records.length) {
        //     console.log("login Failed");
        // }

    }
}

module.exports = {
    userVerify : userVerify
};