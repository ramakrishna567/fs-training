let x = function(){
    console.log('I am Function called from another function');
    
};
let y = (msg, callback)=>{
console.log("Do Something Here");
callback();
// var data = msg();
console.log(msg);

}
y("Here String", x);