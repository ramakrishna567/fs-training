//Access Modifiers 
// By default "PUBLIC" for every property and methods
class DilPizza {
    public static pname: string = "Dil Pizza";
    public static pCompany: string = "Tata";
    public static price: number;
    public static size: number;
    public add: string[] = [];

    protected ingredients: string[] = [];
    private type: string;

    public makePiiza(): string {
        return "Your order is in kitchen now! It take mininum 20 minutes"
    }

    //static method can not access generic properties only acces static properties
    public static takeOrder() {
        console.log(`
        Order from ${DilPizza.pCompany} for
        Pizza : ${DilPizza.pname} of
        size : ${this.size} of
        Price : ${this.price / 2} `);

    }
    public addOns() {
        this.add.push("Extra Chillis Sos");
        this.add.push("Extra Chillis Sos");
        console.log(this.add);

    }
        // this.addOns();// within class we can not invoke a functions

} //class

class Sample extends DilPizza{
    public showIngd():string{
    this.ingredients.push("cheese");
    return this.ingredients[0];
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
// pizza.ingredients;// We can not access OUTSIDE class

let sample = new Sample();
let sam = sample.showIngd();
console.log(sam);

// We can use constructor Access Modifiers