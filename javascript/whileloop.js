let count = 0;
otp = 12345;
do {
    if (count < 3) {
        console.log("the count is:", otp);
    }
    else if(count==3) {
        otp = 15040;
        console.log("the count is:", otp);
    }
    count++;
} while (count <= 3);

// while(count>0)
// {
// console.log(count);
// count = count-1;
// count = count-1;
// count--;
// }


// infinite loop
// while(true){

// }