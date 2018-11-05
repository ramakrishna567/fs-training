const eventsData = require('../models/data/eventdetails.json');
const fs = require('fs');
const path = require('path');

module.exports.getAllevents = function (req, res, next) {
    console.log(req.url + " " + req.method);
    console.log("req query", req.query);
    console.log("req ip address :", req.ip);
    console.log("req hostname :", req.hostname);
    console.log("req protocol :", req.protocol);
    console.log("req parameters :", req.params);
    console.log("req route :", req.route);
    console.log("req path :", req.path);
    console.log("req app :", req.app);
    let offset = 0;
    let count = 3;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(count = req.query.count, 10);
    }
    console.log(offset);
    let events = eventsData.slice(offset, offset + count);
    console.log(events.length);

    res
        .status(200)
        .set('Contet-Type', 'application/json')
        .json(events);
}

//for one event
module.exports.getOneEvent = (req, res, next) => {
    console.log(req.params);
    let eventId = req.params.eventId;
    if (req.params.eventId) {
        if (eventsData.length > eventId) {
            event = eventsData[parseInt(req.params.eventId, 10)];
            res
                .status(200)
                .set('Content-Type', 'application/json')
                .json(event);
        } else {
            res
                .status(400)
                .set('Content-Type', 'application/json')
                .json({
                    message: "bad request"
                });
        }
    } else {
        res
            .status(400)
            .set('Content-Type', 'application/json')
            .json({
                message: "Invalid product ID"
            });
    }
}

//for new event
module.exports.addNewEvent = function (req, res, next) {
    console.log(req.body);
    if (req.body) {
        fs.appendFile(path.join(__dirname, '../models/data/addedNewEvents.json'), JSON.stringify(req.body)+",\n", function (err, data) {
            if (err) throw err;
            console.log("product is added to Database");
        });
        res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(req.body);
    } else {
        res
            .status(400)
            .set('Content-Type', 'application/json')
            .json({
                message: "Event is not added"
            });
    }
}

//for new event
module.exports.updateEvents = function (req, res, next) {
    console.log(req.body);
    if (req.body) {
        fs.writeFile(path.join(__dirname, '../models/data/addedNewEvents.json'), JSON.stringify(req.body), function (err, data) {
            if (err) throw err;
            console.log("product is updated to Database");
        });
        res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(req.body);
    } else {
        res
            .status(400)
            .set('Content-Type', 'application/json')
            .json({
                message: "Event is not updated"
            });
    }
}