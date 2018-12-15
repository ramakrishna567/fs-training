const connection = require("../models/db.mysql.conn");

//Getting Entire Table
exports.getData = (req, res, next) => {
    var sql = "SELECT * FROM customers";

    connection.query(sql, (err, table) => {
        if (err) {
            res
                .status(404)
                .send("err in code")
        } else {
            res
                .status(200)
                .send(JSON.stringify(table));
        }
    });
}

// Get one customer details means one documents
exports.getOneCustomer = (req, res, next) => {
    var sql = "SELECT *FROM customers WHERE name = ?";

    connection.query(sql, [req.params.name], (err, customer) => {
        if (err) {
            res
                .status(404)
                .send("err in code")
        } else {
            res
                .status(200)
                .send(JSON.stringify(customer));
        }
    });
}


// Get one customer details means one documents
exports.deleteOneCustomer = (req, res, next) => {
    var sql = "DELETE FROM customers WHERE name = ?";

    connection.query(sql, [req.params.name], (err, customer) => {
        if (err) {
            res
                .status(404)
                .send("err in code")
        } else {
            if (!customer) {
                res
                    .status(500)
                    .json({
                        msg: "customer not found",
                        cust: customer
                    });
            } else {
                res
                    .status(200)
                    .send("Customer Deleted" + JSON.stringify(customer));
            }
        }
    });
}

// INSERT DATA INTO TABLE
exports.postData = (req, res, next) => {
    var name = req.body.name;
    var address = req.body.address;

    var sql = "INSERT INTO customers (name, address) VALUES (?,?)";

    connection.query(sql, [name, address], function (err, result) {
        if (err) {
            console.log(err);
            res
                .status(404)
                .send("error in code");
        } else {
            res
                .status(200)
                .send("Data inserted")
            console.log("1 record inserted", result);
        }
    });
}

// UPDATE customer details
module.exports.updateCustomer = (req, res, next) => {
    var sql = "UPDATE customers SET address= ? WHERE name = ?";
    let name = req.body.name;
    let address = req.body.address;

    connection
        .query(sql, [address, name], (err, resu) => {
            if (err) {
                res
                    .status(404)
                    .send("error in code");
                    console.log(err);
                    
            } else {
                res
                    .status(200)
                    .send("1 record updated")
                console.log("1 record update", resu);
            }
        })
}