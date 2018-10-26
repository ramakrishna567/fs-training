var cartFruits = [];
var boquet = [];
var fruitName = ["mango", "banana", "apple", "orange", "lemon", "others"];
var friutCost = [20, 10, 30, 15, 5, 50];
var checkName, totalCost, fruitQuantity;

for(;;){
    alert(`Welcome to NatureBasket!!\n We have stock of following fruits to purchase
    \n mango = 20/- \n banana = 10/- \n apple=30/- \n orange=15/- \n lemon=5/- \n others=50/-`);
    checkName = prompt("Enter fruit Name :"); 

    if (checkName != ''){
        for (var index=0; index<fruitName.length; index++)
        {
            if(checkName == fruitName[index]){
                if (fruitName[index] == 'others' || fruitName[index] == 'other'){
                    checkName2 = prompt("Enter other fruit Name :");
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = prompt("How many fruits you want?");
                    totalCost = fruitQuantity * friutCost[index];
                    alert(`total cost is : ${totalCost}`+"\ndata is stored");
                    cartFruits = [fruitName[index], checkName2, friutCost[index], fruitQuantity, totalCost];
                    boquet.push(cartFruits);
                    }
                    else{
                    alert(`${fruitName[index]} fruit cost is : ${friutCost[index]}`);
                    fruitQuantity = prompt("How many fruits you want?");
                    totalCost = fruitQuantity * friutCost[index];
                    alert(`total cost is : ${totalCost}`+"\ndata is stored");
                    cartFruits = [fruitName[index], friutCost[index], fruitQuantity, totalCost];
                    boquet.push(cartFruits);
                     }
        }
    }
}
else{
    alert("you will try again!!");
    break;
}
}
console.log(boquet);