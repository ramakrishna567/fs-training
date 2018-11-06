const mongoose = require('mongoose');

let Product = mongoose.Model('Product');

// module.exports.getAllProducts = function (req, res, next) {
//     console.log(req.url);
//     console.log(req.query);

//     let offset = 0;
//     let count = 3; //minimum three products showcase

//     //logic of pagenation
//     if (req.query && req.query.offset) {
//         offset = parseInt(req.query.offset, 10);
//     }
//     if (req.query && req.query.count) {
//         count = parseInt(count = req.query.count, 10);
//     }

//     Product.find()
//     .skip(offset).limit(count)
//         .exec(function (err, products) {
//             if (err) {
//                 console.log(err);
//                 res
//                     .status(404)
//                     .set('Content-Type', 'application/json')
//                     .json({
//                         message: "product not found",
//                         error: err
//                     });
//             }
//             else {
//                 console.log(products.length);

//                 res
//                     .status(200)
//                     .set('Content-Type', 'application/json')
//                     .json(products);
//             }
//         });
// }

//for One product 
module.exports.getOneProduct = function (req, res, next) {

    var productId = req.params.productId;
    console.log(req.params);

    if (req.params.productId) {
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
    console.log(req.body);
    if (req.body) {
        var newProduct = new Product(req.body)
        Product
        .save(req.body, function (err, isInsert) {
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
                    .json(isInsert);
            }
        });
        // fs.appendFile(path.join(__dirname, '../models/data/addedNewProduct.json'), JSON.stringify(req.body) + ", \n", function (err, data) {
        //     if (err) throw err;
        //     console.log("product is added to Database");
        // });

        // res
        //     .status(200)
        //     .set('Content-Type', 'application/json')
        //     .json(req.body);
    } else {
        res
            .status(404)
            .set('Content-Type', 'application/json')
            .json({
                message: "req not founmd"
            });
    }
}

//update
module.exports.updateOneProduct = function (req, res, next) {
    console.log("update one product");
    let productId = req.params.productId;
    let collection = conn.get().db('tradewin').collection('productdetails');
    console.log(req.body);

    if (req.body) {
        var filterQuery = {
            _id : ObjectId(productId)
        };
        var updateQuery = {
            $set: {
                // name: req.body.name,
                // details: req.body.details,
                cost: req.body.cost
            }
        }
        collection.updateOne(filterQuery, updateQuery, function (err, isUpdate) {
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
        });

        // fs.appendFile(path.join(__dirname, '../models/data/addedNewProduct.json'), JSON.stringify(req.body) + ", \n", function (err, data) {
        //     if (err) throw err;
        //     console.log("product is added to Database");
        // });

        // res
        //     .status(200)
        //     .set('Content-Type', 'application/json')
        //     .json(req.body);

    } else {
        res
            .status(404)
            .set('Content-Type', 'application/json')
            .json({
                message: "req not founmd"
            });
    }
}