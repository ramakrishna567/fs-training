var hero = {
    name = "SuperMan",
    power = ["fly Power", "mucle power", "laser Eyes"]
    age = 29;
    yearBirth = 1989
    address : {
        street : "Golden Street",
        pincode : 10001,
        state : "US",
    },
    readPower : function readPower(){
        return this.power;
    },
}
var heroInfo = function(heroData)
{
    console.log(heroData);
    
}
var readHeroien = function() //function epression, readHeroin Contains code of function
{
    return "Super Women"
}

hero.readHeroien = readHeroien;
console.log(hero.readHeroien());

console.log(hero.readPower());

var removePower = ()=>{
    hero.power.shift();
    return hero.power;
}

console.log(removePower());
