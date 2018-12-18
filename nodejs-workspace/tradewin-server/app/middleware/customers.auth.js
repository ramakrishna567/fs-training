// const db = require("../models/db.mysql.conn");

// // For Registration with MySql
// exports.custRegistraion = (req, res, next) => {

//     let firstName = req.body.firstName;
//     let lastName = req.body.lastName;
//     let email = req.body.email;
//     let password = req.body.password;

//     if (!req.body || !email || !password) {
//         res
//             .status(500)
//             .json({
//                 msg: "Required Fields Missed!",
//                 auth: false
//             })
//     }
//     else {
//         let sqlQuery = 'INSERT INTO customers (firstName, lastName, email, password) VALUES (?,?,?,?)';

//         db.query(sqlQuery, [firstName, lastName, email, password],
//             function (err, result) {
//                 if (err) {
//                     res
//                         .status(404)
//                         .json({
//                             msg: "Server Error Registration Failed!",
//                             err: err
//                         })
//                 } else {
//                     res
//                         .status(404)
//                         .json({
//                             msg: "Registraion Success",
//                             err: JSON.stringify(result)
//                         })
//                 }
//             })
//     }

// }

// // Login Customers with SQL
// exports.loginCustomer = (req, res, next) => {
//     let email = req.body.email;
//     let usr_password = req.body.password;

//     if (!req.body || !email || !usr_password) {
//         res
//             .status(500)
//             .json({
//                 msg: "Required Fields Missed!",
//                 auth: false
//             })
//     } else {
//         let sqlQuery = 'SELECT password FROM customers WHERE email = ?';

//         db.query(sqlQuery, [email], function (err, customer) {
//             if (err) {
//                 res
//                     .status(500)
//                     .json({
//                         msg: "Server Error!",
//                         auth: false,
//                         err: err
//                     })
//             } else {
//                 if (customer.length == 0) {
//                     res
//                         .status(500)
//                         .json({
//                             msg: "Account Not Found !",
//                             auth: false,
//                         })
//                 } else if (customer[0].password === usr_password) {
//                     res
//                         .status(500)
//                         .json({
//                             msg: "Login Success!",
//                             auth: true,
//                             result: customer
//                         });
//                 } else {
//                     res
//                         .status(500)
//                         .json({
//                             msg: "Password Wrong!",
//                             auth: true,
//                         });
//                 }
//             }
//         })

//     }
// }