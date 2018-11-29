//Abstract class declare with "abstract" keyword
abstract class Pizza {
    name: string;
    size: string;
    price: number;

    //Abstract Method declare with "abstract" keyword
    abstract takeOrder():void;

    makePiiza():string{
        return "Your order is in kitchen now! It take mininum 20 minutes"
    }
}

//We can't create instance of abstract class
// let pizza = new Pizza();

class Vendor extends Pizza{
    vendorName : string;

    takeOrder(){
        console.log(`
        Order from ${this.vendorName} for
        Pizza : ${this.name} of
        size : ${this.size} of
        Price : ${this.price/2} `);

        let orderStatus = this.makePiiza();
        console.log(orderStatus);
        
    }
}

class Vendor2 extends Pizza{
    vendorName : string;

    takeOrder(){
        console.log(`
        Order from ${this.vendorName} for
        Pizza : ${this.name} of
        size : ${this.size} of
        Price : ${this.price/3.33} `);

        let orderStatus = this.makePiiza();
        console.log(orderStatus);
    }
}

let vendor1 = new Vendor();
vendor1.vendorName = "Pizza Hut";
vendor1.name = "Cheese Pizza";
vendor1.price = 500;
vendor1.size = "12inch";
vendor1.takeOrder();

console.log("----------------------------------");

let vendor2 = new Vendor2();
vendor2.vendorName = "McDonalds";
vendor2.name = "Pepper Pizza";
vendor2.price = 300;
vendor2.size = "7inch";
vendor2.takeOrder();

console.log("----------------------------------");
//Memory allocation with "new" keyword
// As many objects we will create that time that much memory will be allocated
let vendor = new Vendor();
vendor.takeOrder();