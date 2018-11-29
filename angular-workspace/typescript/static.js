var DilPizza = /** @class */ (function () {
    function DilPizza() {
        this.add = [];
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
}());
//Accessing static Properties via Class Reference
DilPizza.size = 12;
DilPizza.price = 500;
DilPizza.takeOrder();
// DilPizza.addOns() // We can not access static Methods with class reference
var pizza = new DilPizza();
pizza.addOns();
var pstatus = pizza.makePiiza();
console.log(pstatus);
