const express = require('express');
const BusTimeSchedulesController = require('../controller/busTimeScheduleController');

const router = express.Router();

/**
 * @swagger
 * /schedules/FindSchedules:
 *   post:
 *     summary: Find all schedules by Route ID
 *     description: Retrieve all bus schedules for a specific route ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               route_id:
 *                 type: integer
 *                 description: The route ID.
 *     responses:
 *       200:
 *         description: Successfully fetched schedules.
 *       400:
 *         description: Invalid input.
 *       500:
 *         description: Server error.
 */
router.get('/FindSchedules', BusTimeSchedulesController.getSchedulesByRouteId);

/**
 * @swagger
 * /schedules/filterSchedules:
 *   post:
 *     summary: Filter schedules
 *     description: Filter bus schedules by arrival time and destination.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               arrivalTime:
 *                 type: string
 *                 format: time
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
 *                   origin:
 *                     type: string
 *                     description: The origin of the bus.
 *                   departure_time:
 *                     type: string
 *                     format: time
 *                     description: The departure time.
 *                   arrival_time:
 *                     type: string
 *                     format: time
 *                     description: The arrival time.
 *                   number_plate:
 *                     type: string
 *                     description: The number plate of the bus.
 *                   type:
 *                     type: string
 *                     description: The type of the bus.
 *                   total_booked_seats:
 *                     type: integer
 *                     description: The total number of booked seats.
 *       400:
 *         description: Invalid input.
 *       500:
 *         description: Server error.
 */
router.post('/filterSchedules', BusTimeSchedulesController.filterSchedulesByArrivalTimeAndDestination);

module.exports = router;
