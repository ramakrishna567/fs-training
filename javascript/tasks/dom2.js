var count = 1;
var ulEle = document.createElement('ul');

function creatItems() {
    var liEle = document.createElement('li');
    liEle.setAttribute('id', `item${count}`);
    liEle.innerText = 'Item' + count;
    ulEle.appendChild(liEle);
    document.body.appendChild(ulEle);
    count++;
}

function replaceItem(){
    var position = +prompt("Enter position of Replace Item");
    var item = document.querySelector(`#item${position}`);
    item.innerText = prompt("Enter your Item Name :");
}

function removeItems(){
    var position = +prompt("Enter position of Replace Item");
    var item = document.querySelector(`#item${position}`);
    item.outerHTML = null;
}

function removeAll(){
    var ul = document.querySelector('ul');
    document.body.removeChild(ul);
    // ul.outerHTML = null;

}

console.log(document.body);
