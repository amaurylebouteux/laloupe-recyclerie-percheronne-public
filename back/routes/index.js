const express = require('express');
const router = express.Router();
const func_content = require('./func_content');
const contact = require('./contact');
const user = require('./user');
const counters = require('./counters');
const events = require('./events');
const schedule = require('./schedule');



router.use('/func_content', func_content);
router.use('/contact', contact);
router.use('/user', user);
router.use('/counters', counters);
router.use('/events' , events);
router.use('/schedule', schedule);


module.exports = router;