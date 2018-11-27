// //any type of Array
// let list = [1,2,3,, "hi", false];
// // let list2 = []; //It is any type
// let list2 = [1,2];
// let list3 // it is any type
// let number1:number[];
// let number2 = [12, 14];
// let strArry:string[];
// let booleanArr:boolean[]
// let anyArr : any[];
// // anyArr = "hiii"// It is not allowed
// // You will try all methods in array


// //TUPLE
// let tupp : [] //any type of Tuple
// let tupp2 : [number, string, boolean] //fixing types and length
// tupp2 = [12, "hi", false] // we must pass all mentioned types
// // tupp2 = [12, "hi", false, "kk"] // we can't pass extra element

//ENUM
// let obj:object = {
//     name : "sample"
// }
// const sample = 10 
// sample = 20 // We can't change const value

// enum Ranks{
//     FIRST, SECOND, THIRD, FOURTH
// }

// enum Colors{
//     RED, GREEN,BLUE, BLACK
// }

// console.log(Ranks.FIRST, Ranks.SECOND);
// console.log(Ranks);
// Ranks.FIRST = 54 // We can't Change value in number

function give(){
    console.log("hii");
    return true;
}
console.log("give type", typeof give());
