function Laptop(company, price, hard_disk, ram) {
    this.company = company;
    this.price = price;
    this.hard_disk = hard_disk;
    this.ram = ram;
}
var dell = new Laptop('dell', 25000, '1TB', '2GB');

console.log(dell);
dell.price = 50000;
dell.display = "1024x768";
console.log(dell);

Laptop.prototype.speed = '1.5GHz';
console.log(dell.hard_disk);
console.log(dell.speed);

var hp_lap = new Laptop('hp', 50050, '2TB', "4GB");
console.log(hp_lap);

hp_lap.prototype.speed = '2GHz'
console.log(hp_lap.speed);
