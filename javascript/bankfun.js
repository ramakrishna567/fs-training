var user = new Object();
var accounts = new Array ();
const accountNo, 
function showBalance(
    for()


)



function openAccount(){
    const accountNo = prompt("Enter Account Number");
    var accountName = prompt("Enter Account Name :");
    var accountbalance = prompt("Enter Account opening balance :");
    var accountEmail = prompt("Enter Email Here:");
    var accountPhone = prompt("Enter Phone Number :");
    user.name = accountName;
    user.accountNo = accountNo;
    user.email = accountEmail;
    user.phone = accountPhone;
    user.balance = Number(accountbalance);
    accounts.push(user);
    alert("Account created Successfullt~");
}