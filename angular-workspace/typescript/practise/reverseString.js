function reverseString(str) {
    var stringRev = " ";
    // console.log(str.length);
    for (var index = 0; index < str.length; index++) {
        var patt1 = /\s/;
        if (str.match(patt1) == ' ') {
            // var res = str[index];
            // stringRev = str[index]+stringRev;
            console.log("hiiii");
        }
        else {
            console.log("helllllo");
        }
    }
}
// console.log(stringRev);
// console.log(str[res]);
// var res = str.substr(0,5);
// return res;
console.log(reverseString("Hello World"));
