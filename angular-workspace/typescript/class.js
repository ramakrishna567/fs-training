var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.showMotor = function () {
        //this keyword for calling current class
        return "Your Choosen Motor is : " + this.name + "\n        with Configurations : \n        Type : " + this.type + "\n        company : " + this.company + "\n        of speed : " + this.speed + "\n        with design : " + this.design.name + " ";
    };
    Motor.prototype.runMotor = function () {
        console.log(this.name + " is will running soon");
    };
    return Motor;
}());
//We can't set property value but we can access property
//so for that 
// let motor : Motor = new Motor(); //motor as a reference variable
var motor = new Motor(); //motor as a reference variable
motor.name = 'TATA Motors';
motor.company = 'TATA';
motor.type = 'High';
motor.speed = 200;
motor.design = {
    name: "Good",
    length: 23,
    width: 46,
    isAc: true,
    isDc: false
};
var motorLogs = motor.showMotor();
console.log(motorLogs);
motor.runMotor();
//any object and any variable those don't have memory;
//with reference varibale that doesnt memory it is default undefined
var motor2 = new Motor(); //motor is a object
var motorLogs2 = motor2.showMotor();
console.log(motorLogs2);
