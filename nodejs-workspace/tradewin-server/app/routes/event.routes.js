const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events.controller');

router
.route('/events')
.get(eventsCtrl.getAllEvents);

router
.route('/api/events/new')
.post(eventsCtrl.addNewEvent);

router
.route('/api/events/update/:eventId')
.put(eventsCtrl.updateEvent);

router
.route('/api/events/:eventId')
.get(eventsCtrl.getOneEvent);

router
.route('/api/events/delete/:eventId')
.delete(eventsCtrl.deleteEvent);

module.exports = router;