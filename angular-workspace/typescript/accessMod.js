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
//Access Modifiers 
// By default "PUBLIC" for every property and methods
var DilPizza = /** @class */ (function () {
    function DilPizza() {
        this.add = [];
        this.ingredients = [];
        // this.addOns();// within class we can not invoke a functions
    }
    DilPizza.prototype.makePiiza = function () {
        return "Your order is in kitchen now! It take mininum 20 minutes";
    };
    //static method can not access generic properties only acces static properties
    DilPizza.takeOrder = function () {
        console.log("\n        Order from " + DilPizza.pCompany + " for\n        Pizza : " + DilPizza.pname + " of\n        size : " + this.size + " of\n        Price : " + this.price / 2 + " ");
    };
    DilPizza.prototype.addOns = function () {
        this.add.push("Extra Chillis Sos");
        this.add.push("Extra Chillis Sos");
        console.log(this.add);
    };
    DilPizza.pname = "Dil Pizza";
    DilPizza.pCompany = "Tata";
    return DilPizza;
}()); //class
var Sample = /** @class */ (function (_super) {
    __extends(Sample, _super);
    function Sample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sample.prototype.showIngd = function () {
        this.ingredients.push("cheese");
        return this.ingredients[0];
    };
    return Sample;
}(DilPizza));
//Accessing static Properties via Class Reference
DilPizza.size = 12;
DilPizza.price = 500;
DilPizza.takeOrder();
// DilPizza.addOns() // We can not access static Methods with class reference
var pizza = new DilPizza();
pizza.addOns();
var pstatus = pizza.makePiiza();
console.log(pstatus);
// pizza.ingredients;// We can not access OUTSIDE class
var sample = new Sample();
var sam = sample.showIngd();
console.log(sam);
