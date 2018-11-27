//CUSTOME TYPE EXAMPLE USING INTERFACE
interface UserInfo{
    name : string,
    phNumber : number
}

interface Measurement{
    name : string,
    type : string,
    length:number,
    width : number,
    height : number,
    isShirt : boolean,
    isPant : boolean
}

function getRequirement(user:UserInfo, data:Measurement){
    console.log(`Hi ${user.name} with Phone Number ${user.phNumber}
    Your Measurements For ${data.name} are
    type : ${data.type}
    lenght : ${data.length}
    width : ${data.width}
    height : ${data.height}
    isShirt : ${data.isShirt}
    isPant : ${data.isPant}
    `);
    stitch(data);
}

function stitch(data : Measurement){
    console.log("Your cloths added for Stitching");
    console.log(data);
}

getRequirement({
    name : "ram",
    phNumber : 9640487079  
},
{
    name : "Apple Cut Shirt",
    type : "shirt",
    length:20,
    width : 15,
    height : 30,
    isShirt : true,
    isPant : false  
});

//We can do with Pant also