
index = 1;
function createUnorderList() {
    var unorderList = document.createElement('ul');
    var item1 = document.createElement('li');

    item1.innerText = 'Item' +index;
    unorderList.appendChild(item1);

    document.body.appendChild(unorderList);
    index++
} 
