var user = {
    "name" : "John",
    "age" : 20,
    "email" : "john#gmail.com",
    "password" : "@john@",
    "address" : {
        "flate_no" : 102,
        "street" : "Vijaya street",
        "area" : "ameerpet",
        "pincode" : 500038
    }, 
    "family" : ["mike", "David", "Sam"]
}

try{
    var ul = document.createElement('ul')
    h1.innerText = user.name

    var h1 = document.createElement('h1')
    for(var i=0; i<user.family.length; i++){
    var li = document.createElement('li')
    li.innerText = user.family[i];
    ul.appendChild(li);
    }
    document.body.appendChild(h1);
    document.body.appendChild(ul);
}catch(err){
    console.log(err);
    
}