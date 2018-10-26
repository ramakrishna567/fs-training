console.log("This is 1st Statement");
try {
    console.log("This is 2nd Statement");
 ggggghh;
    console.log("This is 3rd Statement");
} catch (error) {
    console.log("error in code");

    // console.log(error);
    console.log("Error name",error.name);
    console.log("Error message",error.message);
    console.log("Error stack",error.stack);
    
} finally {
    // this is always excuting blocke
    console.log("this is always excuting blocke");
    
}
console.log("This is 4th Statement");
console.log("This is 5th Statement");