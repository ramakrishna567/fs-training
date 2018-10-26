
function createSec() {
    // create HTML Element
    var elem = document.createElement('section');

    // creating nested element
    var elemPara = document.createElement('p');
    var elemH1 = document.createElement('h1');

    elemH1.innerText = "Welcome to javascript";
    elemPara.innerText = "this is Paragraph";

    elem.appendChild(elemH1); //this order that going print on the browers
    elem.appendChild(elemPara);

    document.body.appendChild(elem); //adding element to body
}

function createDiv() {
    // create HTML Element
    var elemDiv = document.createElement('div');

    var elemPara2 = document.createElement('p');
    var elemH2 = document.createElement('h1');

    elemPara2.innerText = "this is division paragraph";
    elemH2.innerText = "this is Division Heading";

    elemDiv.appendChild(elemH2);
    elemDiv.appendChild(elemPara2);

    document.body.appendChild(elemDiv); //adding element to body
}
