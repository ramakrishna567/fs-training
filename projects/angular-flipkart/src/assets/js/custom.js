window.onload=function(){

    //set button id on click to hide first modal
$("#reg-modal").on( "click", function() {
    $('#mymodal').modal('hide');
});
//trigger next modal
$("#reg-modal").on( "click", function() {
    $('#mymodal2').modal('show');
});

$("#log-modal").on( "click", function() {
    $('#mymodal2').modal('hide');
});
//trigger next modal
$("#log-modal").on( "click", function() {
    $('#mymodal').modal('show');
});

$('#mycarousel-main').carousel({
    interval: 2000
});

$('#mycarousel-sub').carousel({
    interval: 0
});

//image change
$(function(){
  $("#home-button").on({
   mouseenter: function(){
    $(this).attr('src','../images/footwear1.1.jpeg');
  },
  mouseleave: function(){
    $(this).attr('src','../images/footwear1.jpeg');
  }
  });

});
$(function(){
  $("#home-button2").on({
   mouseenter: function(){
    $(this).attr('src','../images/footwear3.1.jpeg');
  },
  mouseleave: function(){
    $(this).attr('src','../images/footwear3.jpeg');
  }
  });

});



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





}



