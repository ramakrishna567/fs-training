let amoount = +prompt("Enter your Amount");

//double of amount
if (amoount >= 1000 && amoount < 2000) {
    var doubleAmount = 2 * amoount;
    console.log("you amount is doubled", doubleAmount);
}

//ten times of amount
else if (amoount >= 2000 && amoount < 10000) {
    var tensAmount = 10 * amoount;
    console.log("you amount is ten times incremented :", tensAmount);
}

//twenty times of amount
else if (amoount >= 10000 && amoount < 50000) {
    var twentyAmount = 20 * amoount;
    console.log("you amount is twenty times incremented :", twentyAmount);
}

//thirty times of amount
else if (amoount >= 50000 && amoount <= 100000) {
    var thityAmount = 30 * amoount;
    console.log("you amount is thirty times incremented :", thityAmount);
}

//fifty times of amount 
else if (amoount > 100000) {
    var fiftyAmount = 50 * amoount;
    console.log("you amount is fifty times incremented :", fiftyAmount);
}

//Not applicable any scheme 
else {
    console.log("you must be enter minimum rs.1000 then it will double", amoount);
}
