function showUserInfo(user, friends) {
    console.log("Hi user ", user.name);
    console.log("We also welcome friends ", friends.name);
}
var user = {
    name: "john",
    age: 29
};
var friends = {
    name: "smith",
    age: 29
};
showUserInfo(user, friends);
