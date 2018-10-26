var sect = document.createElement('section');

var email = document.createElement('input');
email.setAttribute('type', 'text');
email.setAttribute('id', 'email');

var button = document.createElement('button');
button.setAttribute('id', 'button1');
button.setAttribute('type', 'button');
button.innerText = 'Send Data';

sect.appendChild(email)
sect.appendChild(button)
document.body.appendChild(sect);