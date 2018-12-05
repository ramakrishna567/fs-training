
// laptop Brand code

var spanBrand = document.getElementById('span-brand');
var divBrand = document.getElementById('div-brand');

var spanProc = document.getElementById('span-processor');
var divProcessor = document.getElementById('div-processor');

// Processor division
spanBrand.addEventListener("click", function(){
    (divBrand.style.display == 'none') ? divBrand.style.display = 'block' : divBrand.style.display = 'none';
    (spanBrand.style.transform == "rotate(0deg)") ? spanBrand.style.transform = "rotate(180deg)" : spanBrand.style.transform = "rotate(0deg)";
});

// Processor division
spanProc.addEventListener("click", function(){
    console.log("hii");    
    (divProcessor.style.display == 'none') ? divProcessor.style.display = 'block' : divProcessor.style.display = 'none';
    (spanProc.style.transform == "rotate(0deg)") ? spanProc.style.transform = "rotate(180deg)" : spanProc.style.transform = "rotate(0deg)";
});

let clear = document.getElementById('clear-range');
let range = document.getElementById('customRange1');
let rangeMin = document.getElementById('show-min-range');
let rangeMax = document.getElementById('show-max-range');

range.addEventListener("click", function(){
rangeMax.value = range.value;
});

clear.addEventListener("click", function(){
    range.value = '100000';
    rangeMin.value = '100';
    rangeMax.value = '100000';    
});
