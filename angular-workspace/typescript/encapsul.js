//Encapsulation is OOP concept to set private propert
var Sample = /** @class */ (function () {
    function Sample(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    //this is old way
    //getters 
    Sample.prototype.getName = function () {
        return this.name;
    };
    //setters for name
    Sample.prototype.setName = function (name) {
        this.name = name;
    };
    Object.defineProperty(Sample.prototype, "Age", {
        //NEW WAY TO USE SET AND GET KEWORDS
        get: function () {
            return this.age;
        },
        //setters for age
        set: function (age) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Sample.prototype.showName = function () {
        return this.name + "Your Age" + this.age;
    };
    return Sample;
}());
var sm = new Sample();
sm.setName("mike smith");
console.log(sm.showName());
console.log(sm.getName());
//Directly I access Properties
sm.Age = 43;
console.log(sm.Age);
