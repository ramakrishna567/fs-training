var promise = new Promise(function(resolve, reject){
resolve(1000);
});
promise.then(first).then(second).then(third).
    then(function(response){
        console.log("The Last Result :",response);
        
    }).catch(function(error){
        console.log(error);
        
    })

function first(amount){
    return amount*2;
}

function second(amount){
    return amount*4;
}

function third(amount){
    return amount*4;
}