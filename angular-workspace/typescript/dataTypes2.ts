//This function returns String type
function redLable():string{
    return "Red Lable is Good";
    // return 200; // it gives error
}

//Number return type
function blueLabel():number{
    console.log("Blue is Not Good");
    return 0;
}

//Void return type
function greenLabel():void{ //void not neccessary mention for no return value 
    console.log("Blue is Not Good");
    // return 0;
}

function parameterTypes(name : string){ //void not neccessary mention for no return value 
    console.log("Blue is Not Good");
    name : 122;    
}

 let red = redLable();
 let blue = blueLabel();

 console.log(red);
 console.log(typeof red);
 console.log(blue);
 console.log(typeof blue);
 