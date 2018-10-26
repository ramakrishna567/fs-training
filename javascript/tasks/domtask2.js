var sno = 1;
var count = 1;

var tabEle = document.createElement('table')
var tabHead = document.createElement('thead');

function createHead() {
    var thdata = document.createElement('th');
    thdata.setAttribute('id', `head${sno}`);
    thdata.innerText = "Table Heading" + sno;
    tabHead.appendChild(thdata);
    sno++;
    console.log(sno);

}
tabEle.appendChild(tabHead);

var tableBody = document.createElement('tbody')
function createRow() {
    console.log(sno);
    var index = 1;
    var trTag = document.createElement('tr');
    trTag.setAttribute('id', `tr${count}`);
    for (; index < sno; ++index) {
        var tdTag = document.createElement('td');
        tdTag.setAttribute('id', `cell${index}`);
        tdTag.innerText = 'cell';
        trTag.appendChild(tdTag);
    }
    count++;

    tableBody.appendChild(trTag);
    console.log(index);
}

function replaceCellName() {
    var positionRow = +prompt("Enter Row Number :");
    // for()
    var rowEle = document.querySelector(`#tr${positionRow}`);
    var cellPosition = +prompt('Enter Cell position :');
    var cellName = document.querySelector(`#tr${positionRow} #cell${cellPosition}`);
    cellName.innerText = prompt("Enter Cell Name :");
}
function replaceItems() {
    var position = +prompt('Enter position of Header');
    var valueHead = document.querySelector(`#head${position}`);
    valueHead.innerText = prompt('enter name of heading');
}

tabEle.appendChild(tableBody);
document.body.appendChild(tabEle);
console.log(tabEle);
