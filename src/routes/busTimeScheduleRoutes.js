const express = require('express');
const BusTimeSchedulesController = require('../controller/busTimeScheduleController');

const router = express.Router();

/**
 * @swagger
 * /schedules/FindSchedules:
 *   get:
 *     summary: Find all schedules by Route ID
 *     description: Retrieve all bus schedules associated with a specific route ID.
 *     parameters:
 *       - in: query
 *         name: route_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the route to retrieve schedules for.
 *     responses:
 *       200:
 *         description: Successfully fetched schedules.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 slot_id:
 *                   type: integer
 *                   description: The slot ID of the schedule.
 *                 route_id:
 *                   type: integer
 *                   description: The route ID.
 *                 bus_ntc:
 *                   type: string
 *                   description: The bus NTC number.
 *                 departure_time:
 *                   type: string
 *                   format: time
 *                   description: The departure time.
 *                 arrival_time:
 *                   type: string
 *                   format: time
 *                   description: The arrival time.
 *                 scheduled_date:
 *                   type: string
 *                   description: The scheduled date.
 *                 status:
 *                   type: integer
 *                   description: The status of the schedule.
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
