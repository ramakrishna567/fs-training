let year = +prompt("Enter Year for check leapyear or not?");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert("This is leap year");
        }
        else {
            alert("This is not leap Year");
        }
    }
    else {
        alert("This is leap year");
    }
}
else {
    alert("This is not leap Year");
}