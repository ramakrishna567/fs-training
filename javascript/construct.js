var globalObj = {
    name : 'ram'
};
function Motor(type, wheels, name, company, color){
    this.name = name;
    this.color = color;
    this.type = type;
    this.company = company;
    this.wheels = wheels;
}

// Motor.speed = function(){ //adding new property to construct directly
//     return 120;
// }

Motor.prototype.speed = 120;
Motor.prototype.changeSpeed = function(newSpeed){
    this.speed = newSpeed;
}

var bike = new Motor('type', 2, 'Apache', 'TVS', 'black');
bike.name = 'Scooty'; //modifying object value
bike.cc = '100cc';
bike.changeSpeed(300);

console.log(bike);
console.log(bike.speed);

delete Motor.prototype.speed; // deleting prototype property

var car = new Motor('desiel', 4, 'Verna', 'Honda', 'black');
console.log(car);

Object.prototype.age = 25;
console.log(globalObj);
console.log(globalObj.age);
