//When i create object to child class then child gets automaticcally parent propertis and methods
class Vehicle {
    name: string;
    company: string;
    price: number;
    discount: string;

    constructor(name?: string, company?: string, price?: number, discount?: string) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.discount = discount;
    }

    showVehicle(){
        console.log(`Your vehicle Name is ${this.name}
        that company is ${this.company}`);
    }
}

class TwoWheeler extends Vehicle{
    color : string;
    speed : string;
    run(){
        console.log(`Your vehicle Name is ${this.speed}`);
    }
}

class FourWheeler extends Vehicle{
    color : string;
    speed : string;
    seats : number;
    getSeats (){
        console.log(`Your Vehicle is Four Wheeler having seats ${this.seats}`);
        
    }
    run(){
        console.log(`Your vehicle Name is ${this.speed}`);
    }
}

let twoWheeler = new TwoWheeler();
twoWheeler.name = "TVS Scooty";
twoWheeler.company = "TATA";
twoWheeler.speed = "200kmph";
twoWheeler.showVehicle();
twoWheeler.run();


let fourWheeler = new FourWheeler();
fourWheeler.seats = 5;
fourWheeler.run();
fourWheeler.getSeats();