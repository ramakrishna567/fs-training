// let interior = new Interior()// This is not allowed
//implements is contractor
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.generateCotaion = function () {
        this.total = (this.area * 50);
        return "Your cotation Amount is : " + this.total;
    };
    Customer.prototype.makeHouse = function () {
        return "Your House will be Ready in 10 Days";
    };
    Customer.prototype.collectPayment = function () {
        console.log("Collect Payment" + this.total);
    };
    //extra method added
    Customer.prototype.greeting = function () {
        console.log("Welcome to Sunny Decorators");
    };
    return Customer;
}());
//Implemention is different  but used same methods and properties
var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.generateCotaion = function () {
        this.total = 2 * (this.area * 50);
        return "Your cotation Amount is : " + this.total;
    };
    Customer2.prototype.makeHouse = function () {
        return "Your House will be Ready in 5 Days";
    };
    Customer2.prototype.collectPayment = function () {
        console.log("Collect Payment" + this.total);
    };
    //extra method added
    Customer2.prototype.greeting = function () {
        console.log("Welcome to Sunny Super fast Decorators");
    };
    return Customer2;
}());
var cust = new Customer();
cust.type = "Hall";
cust.area = 200;
cust.budget = 500000;
cust.greeting();
var customer = cust.generateCotaion();
var house = cust.makeHouse();
cust.collectPayment();
console.log(customer);
console.log(house);
//Customer2 
var cust2 = new Customer2();
cust2.type = "Bedroom";
cust2.area = 400;
cust2.budget = 1000000;
cust2.greeting();
var customer2 = cust2.generateCotaion();
var house2 = cust2.makeHouse();
cust2.collectPayment();
console.log(customer2);
console.log(house2);
