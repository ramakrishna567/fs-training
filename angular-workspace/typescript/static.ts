class DilPizza {
    static pname: string = "Dil Pizza";
    static pCompany: string = "Tata";
    static price: number;
    static size: number;
    add: string[] = [];

    makePiiza(): string {
        return "Your order is in kitchen now! It take mininum 20 minutes"
    }

    //static method can not access generic properties only acces static properties
    static takeOrder() {
        console.log(`
        Order from ${DilPizza.pCompany} for
        Pizza : ${DilPizza.pname} of
        size : ${this.size} of
        Price : ${this.price / 2} `);

    }
    addOns() {
        this.add.push("Extra Chillis Sos");
        this.add.push("Extra Chillis Sos");
        console.log(this.add);

    }

}
//Accessing static Properties via Class Reference
DilPizza.size = 12;
DilPizza.price = 500;
DilPizza.takeOrder();
// DilPizza.addOns() // We can not access static Methods with class reference

let pizza = new DilPizza();
pizza.addOns();
let pstatus = pizza.makePiiza();
console.log(pstatus);
