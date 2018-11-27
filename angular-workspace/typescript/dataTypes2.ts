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
//void not neccessary mention for no return value means that 
// It returns undefined
function greenLabel():void{  
    console.log("Blue is Not Good");
    // return undefined;
}

//we are not mention return type it automatically any returntype
function parameterTypes(name):any{  
    console.log("Blue is Not Good");
    console.log("hiiiii",!name);
    console.log(name);
    return name;
    
}

 let red = redLable();
 let blue = blueLabel();

 console.log(red);
 console.log(typeof red);
 console.log(blue);
 console.log(typeof blue);
 console.log("returntype of "+typeof parameterTypes("rk"));
 console.log(typeof greenLabel());
 