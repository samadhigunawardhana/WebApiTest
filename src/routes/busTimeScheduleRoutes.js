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

/**
 * @swagger
 * /filterSchedules:
 *   post:
 *     summary: Filter schedules
 *     description: Filter bus schedules by arrival time and destination.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               arrivalTim
 *             type: object
 *             properties:e:
 *                 type: string
 *                 description: The arrival time to filter schedules (HH:MM:SS format).
 *               destination:
 *                 type: string
 *                 description: The destination to filter schedules by.
 *             required:
 *               - arrivalTime
 *               - destination
 *     responses:
 *       200:
 *         description: Successfully filtered schedules.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   slot_id:
 *                     type: integer
 *                     description: The slot ID of the schedule.
 *                   route_id:
 *                     type: integer
 *                     description: The route ID.
 *                   bus_ntc:
 *                     type: string
 *                     description: The bus NTC number.
 *                   departure_time:
 *                     type: string
 *                     format: time
 *                     description: The departure time.
 *                   arrival_time:
 *                     type: string
 *                     format: time
 *                     description: The arrival time.
 *                   schedule_date:
 *                     type: string
 *                     description: The scheduled date.
 *                   status:
 *                     type: integer
 *                     description: The status of the schedule.
 *       400:
 *         description: Invalid input.
 *       500:
 *         description: Server error.
 */
router.post('/filterSchedules', BusTimeSchedulesController.filterSchedulesByArrivalTimeAndDestination);


module.exports = router;