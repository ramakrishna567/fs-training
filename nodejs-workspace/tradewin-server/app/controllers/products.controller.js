const mongoose = require('mongoose');

var Product = mongoose.model('Product');

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
            }
            else {
                console.log(products.length);
                res
                    .status(200)
                    .set('Content-Type', 'application/json')
                    .json(products);
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
                } else {
                    res
                        .status(200)
                        .set('Content-Type', 'application/json')
                        .json(product);
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
    }
}

module.exports.addOneProduct = function (req, res, next) {
    console.log("Add one product");
    Product
        .create(req.body, function (err, newProduct) {
            if (err) {
                res
                    .status(404)
                    .set('Content-Type', 'application/json')
                    .json({
                        error: "Internal Server Error",
                        message: "Product not inserted"
                    });
            } else {
                res
                    .status(200)
                    .set('Content-Type', 'application/json')
                    .json(newProduct);
            }
        });
}

//Update
module.exports.updateOneProduct = function (req, res, next) {
    console.log("update one product");
    let productId = req.params.productId;

    console.log(req.body);

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
                } else {
                    res
                        .status(200)
                        .set('Content-Type', 'application/json')
                        .json(isUpdate);
                }
            })
    } else {
        res
            .status(404)
            .set('Content-Type', 'application/json')
            .json({
                message: "req not founmd"
            });
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
            }
            else{
                res
                .status(200)
                .set('Content-Type', 'application/json')
                .json(isdelete)
            }
        });
}