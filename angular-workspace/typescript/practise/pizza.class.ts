
interface Details{
    name : string;
    quantity : number;
    isOrder : boolean;
    price : number;
    total : number;
}

class Pizza{
    name : string;
    details : Details;

    constructor(name?:string, details?:Details){
        this.name = name;
        this.details = details;
    }

    greet(name):void{
        console.log(`welcome to ${this.name}`);
    }

    giveOrder(details){
        
        console.log("You have ordered for Pizzas We will accept soon...");
        return this.details;
    }

    takeOrder(isOrder){
        
        if(isOrder){
            console.log("we have taken your order");
        }else{
            console.log("We can not any Order");
        }
        this.makePizza();
    }

    billGeneration(){
        // order.total = order.price * order.quantity;
        let order = this.giveOrder(this.details);
        order.total = order.quantity * order.price;
        console.log(`Your order is accepted details are :
        Pizza name : ${order.name}
        number pizzas : ${order.quantity}
        Price for each pizza : ${order.price}
        total cost is ${order.total}`);
    }

    makePizza(){
        console.log("your pizza is making");
        this.delivery();
    }

    delivery(){
        console.log("deliver succcessful");
    }
}

let customer1 = new Pizza()
customer1.name = "pizzaHut";
customer1.details = {
    name : "pepper",
    quantity : 2,
    price : 150,
    total : 300,
    isOrder : true
}

customer1.greet(customer1.name);
customer1.giveOrder(customer1.details);
customer1.billGeneration();
customer1.takeOrder(customer1.details.isOrder);