interface Design{
    name : string;
    length : number;
    width : number;
    isAc : boolean;
    isDc : boolean;
}

class Motor{
    name : string;
    type : string;
    company : string;
    design : Design;
    speed : number;

    showMotor():string{
        //this keyword for calling current class
        return `Your Choosen Motor is : ${this.name}
        with Configurations : 
        Type : ${this.type}
        company : ${this.company}
        of speed : ${this.speed}
        with design : ${this.design} `
    }

    runMotor():void{
        console.log(`${this.name} is will running soon`);
    }
}

//We can't set property value but we can access property
//so for that 
// let motor : Motor = new Motor(); //motor as a reference variable
let motor = new Motor(); //motor as a reference variable
motor.name = 'TATA Motors';
motor.company = 'TATA';
motor.type = 'High';
motor.speed = 200;
motor.design = {
    name : "Good",
    length : 23,
    width : 46,
    isAc : true,
    isDc : false
};

let motorLogs = motor.showMotor();
console.log(motorLogs);
motor.runMotor();

//any object and any variable those don't have memory;
//with reference varibale that doesnt memory it is default undefined

let motor2 = new Motor(); //motor is a object
let motorLogs2 = motor2.showMotor();
console.log(motorLogs2);