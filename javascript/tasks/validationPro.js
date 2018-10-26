var user = {};
var error = {};
function isEmpty(value) {
    return (value == '') ? true : false;
}
function isNull(value) {
    return (value == 'null') ? true : false;
}
function isUndefined(value) {
    return (value == 'undefine') ? true : false;
}

var nameValidation = function () {
    let name = prompt("enter your name :");
    return new Promise(function (resolve, reject) {
        if (isEmpty(name) || isNull(name) || isUndefined(name)) {
            error.message = 'Name Feild can not be Empty !';
            console.log(error);
        }
        else {
            user.name = name;

            resolve(user);
        }
    });
}


var emailValidation = function (email) {
    return new Promise(function (resolve, reject) {
        let email = prompt("enter your email");
        if (isEmpty(email) || isNull(email) || isUndefined(email)) {
            error.message = 'email Feild can not be Empty !';
            console.log(error);
        }
        else {
            resolve(user);
            user.email = email;

        }
    });
}

var ageValidation = function (age) {
    return new Promise(function (resolve, reject) {
        var age = +prompt("enter your age :");
        if (isEmpty(age) || isNull(age) || isUndefined(age)) {
            error.message = 'age Feild can not be Empty !';
            console.log(error);
        }
        else {
            resolve(user);
            user.age = age;
        }
    });
}

nameValidation().then(function (result) {
    console.log(user);
    return emailValidation(user);
}).then(function (emailResult) {
    console.log(user);
    return ageValidation(user);
}).then(function(ageResult){
    console.log(user);
}).catch(function (error) {
    console.log(error);
})