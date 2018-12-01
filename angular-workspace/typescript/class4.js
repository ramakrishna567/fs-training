var Sample = /** @class */ (function () {
    function Sample(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Sample.prototype.showName = function () {
        return this.name;
    };
    return Sample;
}());
var sm = new Sample("john", 29);
console.log(sm.showName());
