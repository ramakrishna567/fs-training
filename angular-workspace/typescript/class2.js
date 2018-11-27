var Tailor = /** @class */ (function () {
    // constructor(){}; // this is default constructor with Zero Arguments
    //Two arguments constructor initilized default 
    //Here ? mark is 'optional operator' set as last parameter
    function Tailor(name, dimensions) {
        this.name = name;
        this.dimensions = dimensions;
    }
    //While declaring a object we can use different Name
    Tailor.prototype.stitch = function () {
        console.log(this.dimensions);
    };
    Tailor.prototype.generateBills = function (isShirt) {
        if (isShirt) {
            console.log("Welcome to " + this.name);
            console.log("Your Bill is 500 Rs.");
        }
        else {
            console.log("Welcome to " + this.name);
            console.log("Your Bill is 1000 Rs.");
        }
    };
    return Tailor;
}());
// let cust1 = new Tailor(); //It is also zero arguments
//Initilizing Default Property Vai constructor
var cust1 = new Tailor("Dinesh Tailors", {
    length: 21, width: 10, isShirt: true, type: 'Apple Cut'
});
// cust1.name = "Dinesh Tailors"
// cust1.dimensions = {
//     length: 21, width: 10, isShirt: true, type: 'Apple Cut'
// }
// cust1.generateBills(true);
cust1.generateBills(cust1.dimensions.isShirt);
cust1.stitch();
//Use Object for setting properties
var cust2 = new Tailor();
cust2.name = "Good Tailors";
cust2.dimensions = {
    length: 21, width: 10, isShirt: true, type: 'Apple Cut'
};
cust2.generateBills(cust2.dimensions.isShirt);
cust2.stitch();
