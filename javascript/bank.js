let msg = alert("Welcome RK Banks! \n 1.balance \n 2.deposit \n 3.withdraw");
var transName = prompt("What type of transcation do you want?");
var balance = 1000;
let depoistAmount;
let withdrawAmount;

if (transName == '1' || transName == 'balance') {
    console.log(balance);
    console.log("you balance is Initially :", balance);
}
else if (transName == '2' || transName == 'deposit') {
    depoistAmount = +prompt("Enter amount to Deposit :");
    balance = balance + depoistAmount;
    console.log("Your Amount is Deposited \n Total Amount in Your Account is :", balance);
}
else if (transName == '3' || transName == 'withdraw') {
    withdrawAmount = +prompt("Enter amount to Withdraw :");
    balance = balance - withdrawAmount;
    alert("Your Amount is Deposited");
    alert("Welcome RK Banks! \n 1.balance \n 2.deposit \n 3.withdraw");

}
else{
    alert("select right transcation");
}