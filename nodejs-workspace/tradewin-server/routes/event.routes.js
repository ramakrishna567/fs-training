const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events.controller');

router
.route('/events')
.get(eventsCtrl.getAllevents);

router
.route('/api/events/new')
.post(eventsCtrl.addNewEvent);

router
.route('/api/events/update')
.put(eventsCtrl.updateEvents);

router
.route('/api/events/:eventId')
.get(eventsCtrl.getOneEvent);

module.exports = router;