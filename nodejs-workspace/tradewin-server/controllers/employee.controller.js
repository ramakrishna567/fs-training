const mongoose = require('mongoose');

const Employees = mongoose.model('Employees');

module.exports.joinEmployee = (req, res, next) => {
    try {
        Employees.insertMany(req.body, (err, employee) => {
            if (err) {
                throw err;
            }
            else {
                res
                    .status(200)
                    .json(employee)
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.aggregationPipeline = (req, res, next) => {
    Employees
        .aggregate([{ $match: { Department: "Dev" } },
        { $group: { _id: "$Id", totalSalary: { $sum: "$salary" } } }])
        .exec(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res
                    .status(200)
                    .json(result)
            }
        });
}

module.exports.mapReduceAgg = (req, res, next)=>{
    var obj = {}
    obj.map = function(){emit(this.Id, this.salary) }
    obj.reduce = function(key, value){return {$sum : "$value"}}
    // obj.query = {Department: "Dev"}

    Employees
    .mapReduce(obj, function(err, result){
        if(err){
            res
            .status
            .json(err);
            // console.log(err);
        }
        // console.log(result);
        res
        .status(200)
        .json(result)
    });
}