var records = require('./accData.js');
// user verification
// console.log(records[1].ac_no);
var userVerify = (accountNo) => {
    var account = 0;
    if (account <= records.users.length) {
        for (; account < records.users.length;) {
            if (accountNo == records.users[account].ac_no) {
                console.log("login successfull");
                return records.users[account];
            }
            else{
                return false;
            }
            ++account;
        }
    }
    else{
        return false;
    }
    console.log(records.users.length);
    console.log(account);
}

module.exports = {
    userVerify: userVerify,
};