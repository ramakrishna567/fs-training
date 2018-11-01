module.exports.getUsers = function (req, res) {
    var user = {
        name: 'john',
        age: 29
    }
    console.log("GET request on /user");
    console.log(req.url + " " + req.method);
    res
        .status(200)
        .set('application/json')
        .json(user);
}