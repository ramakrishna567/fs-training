//Interface is contractor between two classes
interface Interior {
    //abstract properties
    type: string;
    area: number;
    budget: number;

    //abstract methods means these don't have implementation
    //This is not method calling, is declaring method
    //we can not provide body implementation Here
    generateCotaion(): string; //This is not method calling, is declaring method
    makeHouse(): string;
    collectPayment(): void;
}

// let interior = new Interior()// This is not allowed

//implementation of interface Methods
class Customer implements Interior {
    type: string;
    area: number;
    budget: number;
    //Extra property added
    total: number;

    generateCotaion(): string {
        this.total = (this.area * 50);
        return "Your cotation Amount is : " + this.total;
    }

    makeHouse(): string {
        return "Your House will be Ready in 10 Days";
    }

    collectPayment(): void {
        console.log("Collect Payment" + this.total);
    }

    //extra method added
    greeting(): void {
        console.log("Welcome to Sunny Decorators");
    }
}


//Implemention in different class but used same methods and properties same Interface
class Customer2 implements Interior {
    type: string;
    area: number;
    budget: number;
    //Extra property addes
    total: number;

    generateCotaion(): string {
        this.total = 2*(this.area * 50);
        return "Your cotation Amount is : " + this.total;
    }

    makeHouse(): string {
        return "Your House will be Ready in 5 Days";
    }

    collectPayment(): void {
        console.log("Collect Payment" + this.total);
    }

    //extra method added
    greeting(): void {
        console.log("Welcome to Sunny Super fast Decorators");
    }
}
//Instanciation object to Customer class
let cust = new Customer();
cust.type = "Hall";
cust.area = 200;
cust.budget = 500000;
cust.greeting();
let customer = cust.generateCotaion();
let house = cust.makeHouse();
cust.collectPayment();

console.log(customer);
console.log(house);

//Instanciation object to Customer2 class
let cust2 = new Customer2();
cust2.type = "Bedroom";
cust2.area = 400;
cust2.budget = 1000000;
cust2.greeting();

var customer2 = cust2.generateCotaion();
var house2 = cust2.makeHouse();
cust2.collectPayment();
console.log(customer2);
console.log(house2);