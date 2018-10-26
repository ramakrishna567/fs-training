var cartFruits = [];
var boquet = [];
var fruitName = ["mango", "banana", "apple", "orange", "lemon", "others"];
var friutCost = [20, 10, 30, 15, 5, 50];
var fruitOptions, totalCost, fruitQuantity;
for(;;){
    alert(`Welcome to NatureBasket!!\n We have stock of following fruits to purchase
    \n 1.mango = 20/- \n 2.banana = 10/- \n 3.apple=30/- \n 4.orange=15/- \n 5.lemon=5/- \n 6.others=50/- \n 7.exit`);
    fruitOptions = prompt("Enter fruit Name :");
    if (fruitOptions != ''){

switch(fruitOptions){
    case '0': case 'mango':
                    for (var index=0; index<fruitName.length; index++)  {
                    if(fruitOptions == fruitName[index]){
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = +prompt("How many fruits you want?");
                        }
                    }
                    break;
    case '1': case 'banana':
            for (var index=0; index<fruitName.length; index++)  {
                if(fruitOptions == fruitName[index]){
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = +prompt("How many fruits you want?");
                    }
                    }
                    break;
    case '2': case 'apple':
    for (var index=0; index<fruitName.length; index++)  {
        if(fruitOptions == fruitName[index]){
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = +prompt("How many fruits you want?");
        }
    }
                    break;
    case '3': case 'orange':
    for (var index=0; index<fruitName.length; index++)  {
        if(fruitOptions == fruitName[index]){
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = +prompt("How many fruits you want?");
        }
    }
                    break;
    case '4': case 'lemon':
    for (var index=0; index<fruitName.length; index++)  {
        if(fruitOptions == fruitName[index]){ 
    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = +prompt("How many fruits you want?");
        }
    }
                    break;
    case '5': case 'others':
    for (var index=0; index<fruitName.length; index++)  {
        if(fruitOptions == fruitName[index]){ 
                    var checkName2 = prompt("enter other fruit name:");
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = prompt("How many fruits you want?");
        }
    }
                    break;
    default :
                    alert("Invalid option! \n try Again");
                    break;                
        }
        totalCost = fruitQuantity * friutCost[index];
        alert(`total cost is : ${totalCost}`+"\ndata is stored");
        cartFruits = [fruitName[index], checkName2, friutCost[index], fruitQuantity, totalCost];
        boquet.push(cartFruits);
        
    
    }
    else{
        alert("Invalid option! \n try Again");
        break;                   
    }
}
console.log(boquet);
