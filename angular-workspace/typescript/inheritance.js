var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//When i create object to child class then child gets automaticcally parent propertis and methods
var Vehicle = /** @class */ (function () {
    function Vehicle(name, company, price, discount) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.discount = discount;
    }
    Vehicle.prototype.showVehicle = function () {
        console.log("Your vehicle Name is " + this.name + "\n        that company is " + this.company);
    };
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.run = function () {
        console.log("Your vehicle Name is " + this.speed);
    };
    return TwoWheeler;
}(Vehicle));
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourWheeler.prototype.getSeats = function () {
        console.log("Your Vehicle is Four Wheeler having seats " + this.seats);
    };
    FourWheeler.prototype.run = function () {
        console.log("Your vehicle Name is " + this.speed);
    };
    return FourWheeler;
}(Vehicle));
var twoWheeler = new TwoWheeler();
twoWheeler.name = "TVS Scooty";
twoWheeler.company = "TATA";
twoWheeler.speed = "200kmph";
twoWheeler.showVehicle();
twoWheeler.run();
var fourWheeler = new FourWheeler();
fourWheeler.seats = 5;
fourWheeler.run();
fourWheeler.getSeats();
