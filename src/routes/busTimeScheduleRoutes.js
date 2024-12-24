const express = require('express');
const BusTimeSchedulesController = require('../controller/busTimeScheduleController');

const router = express.Router();

/**
 * @swagger
 * /schedules:
 *   get:
 *     summary: find all schedules
 *     description: Set all schedules by id
 *     responses:
 *       200:
 *         description: Successfully Got schedules.
 */ 
router.get('/FindSchedules', BusTimeSchedulesController.getSchedulesByRouteId);

module.exports = router;