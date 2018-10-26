var icon = document.getElementById('icon-eye')
icon.addEventListener("click", showPassword);
var pwd = document.getElementById('pwd');


function showPassword(){
    icon.classList.toggle('active');
    (pwd.type == 'password')? pwd.type = 'text': pwd.type = 'password';
    (pwd.type == 'password')? icon.setAttribute("class","far fa-eye-slash") : icon.setAttribute("class","far fa-eye");
}

function showRange(val){
    document.getElementById("rangeStatus").innerHTML = val;
}