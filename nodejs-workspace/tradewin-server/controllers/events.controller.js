const eventsData = require('../models/data/eventdetails.json');
// const fs = require('fs');
// const path = require('path');
const connection = require('../models/db.connection');
const ObjectId = require('mongodb').ObjectId;



module.exports.getAllEvents = function (req, res, next) {
    let collect = connection.get().db('tradewin').collection('eventdetails');

    console.log(req.url + " " + req.method);
    console.log("req query", req.query);
    // console.log("req ip address :", req.ip);
    // console.log("req hostname :", req.hostname);
    // console.log("req protocol :", req.protocol);
    // console.log("req parameters :", req.params);
    // console.log("req route :", req.route);
    // console.log("req path :", req.path);
    // console.log("req app :", req.app);

    let offset = 0;
    let count = 3;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(count = req.query.count, 10);
    }
    console.log(offset);

    // let events = eventsData.slice(offset, offset + count);
    collect.find().skip(offset).limit(count).toArray(function (err, events) {
        if (err) {
            console.log("data not found" + err);
            res
                .status(404)
                .set('Content-Type', 'application/json')
                .json({
                    message: "data not found!"
                })
        } else {
            res
                .status(200)
                .set('Content-Type', 'application/json')
                .json(events)
        }
    })
    console.log(db);
}

//for one event
module.exports.getOneEvent = function (req, res, next) {
    let collect = connection.get().db('tradewin').collection('eventdetails');

    var eventId = req.params.eventId;
    if (req.params.eventId) {
        collect.findOne({
            _id: ObjectId(eventId)
        }, function (err, result) {
            if (err) {
                res
                    .status(404)
                    .json({
                        message: "document not found"
                    });
            } else {
                console.log(result);

                res
                    .status(200)
                    .set('Content-Type', 'application/json')
                    .json(result)
            }
        });
    } else {
        res
            .status(404)
            .json({
                message: "Bad request"
            });
    }
}

// if (req.params.eventId) {
//     if (eventsData.length > eventId) {
//         event = eventsData[parseInt(req.params.eventId, 10)];
//         res
//             .status(200)
//             .set('Content-Type', 'application/json')
//             .json(event);
//     } else {
//         res
//             .status(400)
//             .set('Content-Type', 'application/json')
//             .json({
//                 message: "bad request"
//             });
//     }
// } else {
//     res
//         .status(400)
//         .set('Content-Type', 'application/json')
//         .json({
//             message: "Invalid product ID"
//         });
// }


//for Schedule Event
module.exports.addNewEvent = function (req, res, next) {
    let collect = connection.get().db('tradewin').collection('eventdetails');

    if (req.body) {
        collect.insertOne(req.body, function (err, isInsert) {
            if (err) {
                console.log(error);
                res
                    .status(404)
                    .json({
                        error: "Server Internal Problem Data",
                        message: "Document is not Inserted"
                    })
            } else {
                res
                    .status(200)
                    .set('Content-Type', 'application/json')
                    .json(isInsert);
            }
        });
    } else {
        res
            .status(400)
        json({
            error: "bad request",
            message: "Data not inserted"
        })
    }
}

// for Update Event
module.exports.updateEvent = function (req, res, next) {
    let collect = connection.get().db('tradewin').collection('eventdetails');
    let eventId = req.params.eventId
 
    let filterQuery = {
        _id: ObjectId(eventId)
    }
    let updateQuery = {
        $unset : {
            event_cost: 0
        }
    }
 
    collect.updateOne(filterQuery, updateQuery, function(err, isupdate){
        if(err) throw err;
        res
        .status(200)
        .set('Content-Type', 'application/json')
        .json(isupdate)
    });
}

// drop document
module.exports.deleteEvent = function(req, res, next){
    let collect = connection.get().db('tradewin').collection('eventdetails');
    let eventId = req.params.eventId
    let filterQuery = {
        _id : ObjectId(eventId)
    }
    let updateQuery = {
        event_cost : 0
    }
    collect.deleteOne(filterQuery, updateQuery, function(err, isDelete){
        if(err) throw err;
        res
        .status(200)
        .set('Content-Type', 'application/json')
        .json(isDelete);
    });
}