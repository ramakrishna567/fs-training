//custome type
interface User{
    name : string,
    age : number
}

interface Friends{
    name : string,
    age : number
}
function showUserInfo(user:User, friends:Friends){
    console.log("Hi user ", user.name);
    console.log("Hi user ", user.age);
    console.log("We also welcome friends ", friends.name);
}

showUserInfo(user, friend);

//we must pass three fileds in parameters for that interface
//It can't allowed extra field for that interface
//It can't allowed missed field

showUserInfo({
    name : "john",
    age : 29
}, {
    name : "smith",
    age : 29 
});

// showUserInfo({},{}) // we can't pass empty object rather than for object type we can

// showUserInfo(27, 25);

//null and undefined is object types
showUserInfo(null, undefined);
// showUserInfo("jonh", "smith");
