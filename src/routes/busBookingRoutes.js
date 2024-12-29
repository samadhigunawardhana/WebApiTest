const express = require('express');
const busbookingController = require('../controller/busBookingController');

const routes = express.Router();


/**
 * @swagger
 * /saveSeats:
 *   post:
 *     summary: Book seats on a bus
 *     description: API endpoint for booking bus seats by saving the user's seat preferences.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               busId:
 *                 type: string
 *                 description: The unique identifier of the bus.
 *                 example: "12345"
 *               userId:
 *                 type: string
 *                 description: The unique identifier of the user.
 *                 example: "67890"
 *               seats:
 *                 type: array
 *                 description: List of seat numbers to be booked.
 *                 items:
 *                   type: string
 *                 example: ["A1", "A2", "B1"]
 *               bookingDate:
 *                 type: string
 *                 format: date
 *                 description: The date of the booking.
 *                 example: "2024-12-30"
 *             required:
 *               - busId
 *               - userId
 *               - seats
 *     responses:
 *       200:
 *         description: Seats booked successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Seats booked successfully."
 *                 bookingId:
 *                   type: string
 *                   example: "abc123xyz"
 *       400:
 *         description: Invalid request body or validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid seat selection."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error."
 */
router.post('/saveSeats', busbookingController.seatBooking);


module.exports = routes;