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

