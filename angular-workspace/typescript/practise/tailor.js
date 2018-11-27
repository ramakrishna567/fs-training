function getRequirement(user, data) {
    console.log("Hi " + user.name + " with Phone Number " + user.phNumber + "\n    Your Measurements For " + data.name + " are\n    type : " + data.type + "\n    lenght : " + data.length + "\n    width : " + data.width + "\n    height : " + data.height + "\n    isShirt : " + data.isShirt + "\n    isPant : " + data.isPant + "\n    ");
    stitch(data);
}
function stitch(data) {
    console.log("Your cloths added for Stitching");
    console.log(data);
}
getRequirement({
    name: "ram",
    phNumber: 9640487079
}, {
    name: "Apple Cut Shirt",
    type: "shirt",
    length: 20,
    width: 15,
    height: 30,
    isShirt: true,
    isPant: false
});
