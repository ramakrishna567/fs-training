var orders = [];
var userOrder = new Object();
var pizzaNames = ["chicken", "muttan", "pepper", "italian", "paneer"];
var pizzaCost = [200, 300, 100, 150, 175];
var pizzaShowName = [];
var pizzaShowType = [];
var pizzaShowQunt = [];

while (true) {
    var options = prompt(`Welcome to RK Pizza hut!!
    1. Place Order
    2. Track Order
    3. Exit`);
    if (options == '1' || options == '2') {
        switch (options) {
            case '1':
                placeOrder();
                break;
            case '2':
                findOrder();
                break;
            default:
                alert("Invalid option \n Exited");
        }
    }
    else {
        alert("Invalid option \n ");
        break;
    }
}

function pizzaTotalcost(pizzName, pizzaCount) {
    for (index = 0; index < pizzaCost.length; index++) {
        if (pizzName == pizzaNames[index]) {
            return pizzaCount * pizzaCost[index];

        }
    }
}




function displayVeg(pizzName, pizzaCount, callback) {
    var pizzaType = "Veg";
    var pizzNameVeg = prompt(`select below Name of Non -veg pizzaas
        Pepper pizza - 100/-
        Italian pizza - 150/-
        Paneer pizza - 175/-`);
    var pizzaCountVeg = +prompt("How many pizzas do you want :");

    var total = callback(pizzName, pizzaCount);

    var userOrder = {};
    userOrder.type = pizzaType;
    userOrder.name = pizzName;;
    userOrder.quantity = pizzaCount;
    userOrder.totalCost = total;
    orders.push(userOrder);
    console.log(orders);
    alert("you have placed order successfully!!");
}


function nonVeg(pizzName, pizzaCount, callback) {
    var pizzaType = "Nonveg";
    var pizzName = prompt(`select below Name of Non -veg pizzaas
        Chicken pizza - 200/-
        Muttan pizza - 300/-`);
    var pizzaCount = +prompt("How many pizzas do you want :");

    var total = callback(pizzName, pizzaCount);

    var userOrder = {};
    userOrder.type = pizzaType;
    userOrder.name = pizzName;;
    userOrder.quantity = pizzaCount;
    userOrder.totalCost = total;
    orders.push(userOrder);
    console.log(orders);
    alert("you have placed order successfully!!");

}

function placeOrder() {
    var pizzaType = prompt(`
    Select type of pizzas do you want :
    1. Non Veg
    2. Veg`);
    if (pizzaType == '1' || pizzaType == '2'
        || pizzaType == 'nonveg' || pizzaType == 'veg') {
        switch (pizzaType) {
            case '1': case 'nonveg':
                nonVeg("chicken", 5, pizzaTotalcost);

                break;
            case '2': case 'veg':
                displayVeg("pepper", 5, pizzaTotalcost);
                break;
            default:
                alert("Invalid Option");
        }
        console.log(orders);
    }
    else {
        alert("Exited \n Invalid Option! Try Agaain!!");

    }
}


function findOrder() {
if(orders.length != 0){
    for(index=0; index < orders.length;index++){
        pizzaShowName.push(orders[index].name);
        pizzaShowType.push(orders[index].type);
        pizzaShowQunt.push(orders[index].quantity);
    }
        alert(`Your Order Details are :
    Pizza Names : ${pizzaShowName}
    Pizza types : ${pizzaShowType}
    Pizza quantity : ${pizzaShowQunt}`);
    pizzaMake();
    }
    else{
        alert("We can't Any orders!! Kindly place an order");
    }
}
function pizzaMake(){
    alert("Your Pizza's are Making within Just wait 1 Seconds");
        setTimeout(function pizzaDispatch() {
            alert("Pizza maked \n It will dispatched after 2 Seconds")
        }, 2000)
     setTimeout(function pizzaDeliver() {
        alert("pizza dipatched \n To deliver it will take 3 Seconds for ride")}, 3000); 
        setTimeout(function ride() {
            alert("Pizza Delivered Successfully \n Thanks for Order");
        }, 5000);
}