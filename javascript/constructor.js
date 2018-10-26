
function Car(company, price, speed, millage) {
    this.company = company;
    this.size = speed;
    this.price = price;
    this.millage = millage;
}

var carModel1 = new Car('tata', 200000, '100kmph', '30kmph');
var carModel2 = new Car('Suzuki', 200000, '100kmph', '30kmph');
console.log(carModel1);
console.log(carModel2);
// console.log(Car());

