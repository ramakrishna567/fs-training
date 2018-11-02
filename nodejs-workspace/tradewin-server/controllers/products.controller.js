const productData = require('../models/data/productdetails.json');
const fs = require('fs');
module.exports.getAllProducts = function (req, res, next) {
    console.log(req.url);
    console.log(req.query);
    var offset = 0;
    var count=3

    //logic of pagenation
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset,10);
    }
    if(req.query && req.query.count){
        count = parseInt(count=req.query.count, 10);
    }

    //slicing json array on Index Value
    var products = productData.slice(offset, offset+count);
    console.log(products.length);

    res
    .status(200)
    .set('Content-Type','application/json')
    .json(products);
}
//for one product 
module.exports.getoneProduct = function (req, res, next) {
    var productId = req.params.productId;
    console.log(req.params);
    
    if(req.params.productId){
        if(productData.length > productId){
            product = productData[parseInt(productData,10)];
            res
            .status(200)
            .set('Content-Type','application/json')
            .json(product);
        }
        else{
            res
            .status(404)
            .set('Content-Type','application/json')
            .json({
                error:"Bad rquest",
                message : "Invalid product Id"
            });
        }
    
    }else{
        res
        .status(404)
        .set('Content-Type','application/json')
        .json({
            error:"Not Found",
            message : "Invalid product Id"
        });
    }
}

module.exports.addOneProduct = function(req, res, next){
    console.log("Add one product");
    console.log(req.body);
 if(req.body){
     fs.appendFile('./addedProduct.json', JSON.stringify(req.body), function(err, data){
         if(err) throw err;
         console.log("product is added to Database");
     });

     res
     .status(200)
     .set('Content-Type','application/json')
     .json(req.body);
 }else{
    res
    .status(200)
    .set('Content-Type','application/json')
    .json({
        message : "req not founmd"
    });
    
 }
    
    
}