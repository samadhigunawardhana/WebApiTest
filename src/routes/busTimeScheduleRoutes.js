const express = require('express');
const BusTimeSchedulesController = require('../controller/busTimeScheduleController');

const router = express.Router();

router.get('/FindSchedules', BusTimeSchedulesController.getSchedulesByRouteId);

module.exports = router;