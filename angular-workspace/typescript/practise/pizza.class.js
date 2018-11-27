var Pizza = /** @class */ (function () {
    function Pizza(name, details) {
        this.name = name;
        this.details = details;
    }
    Pizza.prototype.greet = function (name) {
        console.log("welcome to " + this.name);
    };
    Pizza.prototype.giveOrder = function (details) {
        console.log("You have ordered for Pizzas We will accept soon...");
        return this.details;
    };
    Pizza.prototype.takeOrder = function (isOrder) {
        if (isOrder) {
            console.log("we have taken your order");
        }
        else {
            console.log("We can not any Order");
        }
        this.makePizza();
    };
    Pizza.prototype.billGeneration = function () {
        // order.total = order.price * order.quantity;
        var order = this.giveOrder(this.details);
        order.total = order.quantity * order.price;
        console.log("Your order is accepted details are :\n        Pizza name : " + order.name + "\n        number pizzas : " + order.quantity + "\n        Price for each pizza : " + order.price + "\n        total cost is " + order.total);
    };
    Pizza.prototype.makePizza = function () {
        console.log("your pizza is making");
        this.delivery();
    };
    Pizza.prototype.delivery = function () {
        console.log("deliver succcessful");
    };
    return Pizza;
}());
var customer1 = new Pizza();
customer1.name = "pizzaHut";
customer1.details = {
    name: "pepper",
    quantity: 2,
    price: 150,
    total: 300,
    isOrder: true
};
customer1.greet(customer1.name);
customer1.giveOrder(customer1.details);
customer1.takeOrder(customer1.details.isOrder);
customer1.billGeneration();
