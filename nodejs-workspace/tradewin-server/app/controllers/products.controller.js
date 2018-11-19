const mongoose = require('mongoose');
const log4js = require("log4js")
var Product = mongoose.model('Product');
const multer = require("multer");
const upload = multer({dest : "uploads/"})

log4js.configure('./app/config/log4js.json');
let prodLogger = log4js.getLogger('product');
let errorLogger = log4js.getLogger('logLevelFilter');

module.exports.getAllProducts = function (req, res, next) {
    console.log(req.url);
    console.log(req.query);

    let offset = 0;
    let count = 3; //minimum three products showcase

    //logic of pagenation
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(count = req.query.count, 10);
    }

    Product
        .find()
        .skip(offset)
        .limit(count)
        .exec(function (err, products) {
            if (err) {
                console.log(err);
                res
                    .status(404)
                    .json({
                        message: "product not found",
                        error: err
                    });
                    errorLogger.error("Products are not found", err);
            }
            else {
                console.log(products.length);
                res
                    .status(200)
                    .set('Content-Type', 'application/json')
                    .json(products);
                    prodLogger.info("Get all Products");
            }
        });
}

//for One product 
module.exports.getOneProduct = function (req, res, next) {

    var productId = req.params.productId;

    if (productId) {
        Product
            .findById(productId)
            .exec(function (err, product) {
                if (err) {
                    res
                        .status(404)
                        .set('Content-Type', 'application/json')
                        .json({
                            error: "Not Found",
                            message: "Invalid product Id"
                        });
                        errorLogger.error("Server error Invalid product Id");
                } else {
                    res
                        .status(200)
                        .set('Content-Type', 'application/json')
                        .json(product);
                        prodLogger.info("Got Product");
                }
            })

    } else {
        res
            .status(404)
            .set('Content-Type', 'application/json')
            .json({
                error: "Not Found",
                message: "Invalid product Id"
            });
            prodLogger.error("Invalid product Id");
    }
}

module.exports.addOneProduct = function (req, res, next) {
    console.log(req.file);
    var product = new Product({
        name : req.body.name,
        // image : req.file.path
        image : req.body.image
    })
    product
        .save(function (err, newProduct) {
            if (err) {
                res
                    .status(404)
                    .set('Content-Type', 'application/json')
                    .json({
                        error: "Internal Server Error",
                        message: "Product not inserted"
                    });
                    prodLogger.error("Product not inserted-Internal Server Error")
            } else {
                res
                    .status(200)    
                    .set('application/json')
                    .json(newProduct);
                    prodLogger.info(" Product Inserted Successfully");
            }
        });
}

//Update
module.exports.updateOneProduct = function (req, res, next) {
    let productId = req.params.productId;

    if (req.body) {
        Product
            .findByIdAndUpdate(productId,  req.body , { new: true }, function (err, isUpdate) {
                if (err) {
                    res
                        .status(404)
                        .set('Content-Type', 'application/json')
                        .json({
                            error: "Internal Server Error",
                            message: "Product not Updated"
                        });
                        prodLogger.error("Product not Updated - Internal Server Error ", err);
                } else {
                    res
                        .status(200)
                        .set('Content-Type', 'application/json')
                        .json(isUpdate);
                        prodLogger.info("Product updated Successfully")
                }
            })
    } else {
        res
            .status(404)
            .set('Content-Type', 'application/json')
            .json({
                message: "req not founmd"
            });
            errorLogger.error("req not founmd-required fields missing")
    }
}

// DELETE A DOCUMENT
module.exports.deleteOne = (req, res, next)=>{
    let productId = req.params.productId;
        Product
        .findByIdAndDelete(productId)
        .exec((err, isdelete)=>{
            if(err){
                console.log(err);
                res
                .status(404)
                .send("deletion fialed!!");
                prodLogger.error("deletion fialed!!", err)
            }
            else{
                res
                .status(200)
                .set('Content-Type', 'application/json')
                .json(isdelete);
                prodLogger.info("Product is deleted Successfully");
            }
        });
}