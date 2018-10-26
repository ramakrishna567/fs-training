
function totalCost (a, b){
    return a*b;
}
function pizzaStatus(){
    var x = "making";
    alert(`Status : Pizza Making`);
    alert("pizza Dispatched");
    alert("pizza Delivered in 2 Seconds");
    setTimeout(function deliver(){
    alert("Pizza Delivered Success")}, 3000);
}

var orderStatus = function(status){
    alert("you have order success");
    status();

}

var pizzaOrder = function(name, price, count, callback) {
    var total = callback(price, count);
    alert(`Order Details : 
    Pizza Name : ${name}
    Pizza Price : ${price}
    Pizza Qunatity : ${count}
    Total Cost : ${total}`);
}


pizzaOrder('pepper', 100, 5, totalCost);
orderStatus(pizzaStatus);