let wantFruit = prompt('Do you want fruits :');
if (wantFruit == 'yes' || wantFruit == 'YES') {

    // code for first fruit
    let fruitName_1 = prompt("Enter first fruit Name :");
    if (fruitName_1 != '' && typeof fruitName_1 == 'string') {
        var fruitCount_1 = +prompt(`enter number of ${fruitName_1} fruits:`)
        if (fruitCount_1 != '' && typeof fruitCount_1 == 'number') {
            console.log("data is stored");
        }
        else {
            alert("number of fruits must be a number!");
        }
    }
    else {
        console.log("Kindly you must enter Name of fruit");
    }

    //code for second fruit
    let fruitName_2 = prompt("Enter second fruit Name :");
    if (fruitName_2 != '' && typeof fruitName_2 == 'string') {
        var fruitCount_2 = +prompt(`enter number of ${fruitName_2} fruits:`)
        if (fruitCount_2 != '' && typeof fruitCount_2 == 'number') {
            console.log("data is stored");
        }
        else {
            alert("number of fruits must be a number!");
        }
    }
    else {
        console.log("Kindly you must enter Name of fruit");
    }

    //code for third fruit
    let fruitName_3 = prompt("Enter third fruit Name :");
    if (fruitName_3 != '' && typeof fruitName_3 == 'string') {
        var fruitCount_3 = +prompt(`enter number of ${fruitName_3} fruits:`)
        if (fruitCount_3 != '' && typeof fruitCount_3 == 'number') {
            console.log("data is stored");
        }
        else {
            alert("number of fruits must be a number!");
        }
    }
    else {
        console.log("Kindly you must enter Name of fruit");
    }
    console.log(`you have selected fruit details:
    First fruit Name : ${fruitName_1}
    Number of ${fruitName_1} fruits): ${fruitCount_1}
    Second fruit Name : ${fruitName_2}
    Number of ${fruitName_2} fruits): ${fruitCount_2}
    Third fruit Name : ${fruitName_3}
    Number of ${fruitName_3} fruits): ${fruitCount_3}`);

}

else {
    console.log("Thanks for visiting & visit again");

}