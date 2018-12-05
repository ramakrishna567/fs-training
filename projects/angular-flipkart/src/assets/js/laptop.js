window.onload=function(){
    // -- put your code here

// hover images
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var img4 = document.getElementById('img-4');
var img5 = document.getElementById('img-5');
var img6 = document.getElementById('img-6');
var getImg = document.getElementById('img-hovering');

img1.addEventListener("mouseover", function(){
    getImg.src = img1.src;
});
img2.addEventListener("mouseover", function(){
    getImg.src = img2.src;
});
img3.addEventListener("mouseover", function(){
    getImg.src = img3.src;
});
img4.addEventListener("mouseover", function(){
    getImg.src = img4.src;
});
img5.addEventListener("mouseover", function(){
    getImg.src = img5.src;
});
img6.addEventListener("mouseover", function(){
    getImg.src = img6.src;
});
}

