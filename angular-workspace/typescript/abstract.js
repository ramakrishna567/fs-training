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
//Abstract class declare with "abstract" keyword
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.makePiiza = function () {
        return "Your order is in kitchen now! It take mininum 20 minutes";
    };
    return Pizza;
}());
//We can't create instance of abstract class
// let pizza = new Pizza();
var Vendor = /** @class */ (function (_super) {
    __extends(Vendor, _super);
    function Vendor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vendor.prototype.takeOrder = function () {
        console.log("\n        Order from " + this.vendorName + " for\n        Pizza : " + this.name + " of\n        size : " + this.size + " of\n        Price : " + this.price / 2 + " ");
        var orderStatus = this.makePiiza();
        console.log(orderStatus);
    };
    return Vendor;
}(Pizza));
var Vendor2 = /** @class */ (function (_super) {
    __extends(Vendor2, _super);
    function Vendor2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vendor2.prototype.takeOrder = function () {
        console.log("\n        Order from " + this.vendorName + " for\n        Pizza : " + this.name + " of\n        size : " + this.size + " of\n        Price : " + this.price / 3.33 + " ");
        var orderStatus = this.makePiiza();
        console.log(orderStatus);
    };
    return Vendor2;
}(Pizza));
var vendor1 = new Vendor();
vendor1.vendorName = "Pizza Hut";
vendor1.name = "Cheese Pizza";
vendor1.price = 500;
vendor1.size = "12inch";
vendor1.takeOrder();
console.log("----------------------------------");
var vendor2 = new Vendor2();
vendor2.vendorName = "McDonalds";
vendor2.name = "Pepper Pizza";
vendor2.price = 300;
vendor2.size = "7inch";
vendor2.takeOrder();
console.log("----------------------------------");
var vendor = new Vendor();
vendor.takeOrder();
