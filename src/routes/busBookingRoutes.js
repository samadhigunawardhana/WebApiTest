const express = require('express');
const busbookingController = require('../controller/busBookingController');

// Initialize the router
const router = express.Router();

// Define routes
router.post('/saveSeats', busbookingController.seatBooking);

// Define the route to get available seats

/**
 * @swagger
 * /getAvailableSeats:
 *   get:
 *     summary: Get all available seats for a given bus.
 *     description: Fetches available seats based on number plate, scheduled slot, and booking date.
 *     parameters:
 *       - in: query
 *         name: number_plate
 *         required: true
 *         schema:
 *           type: string
 *         description: The bus number plate.
 *       - in: query
 *         name: scheduled_slot
 *         required: true
 *         schema:
 *           type: string
 *         description: The scheduled time slot for the bus.
 *       - in: query
 *         name: booking_date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The booking date for the bus.
 *     responses:
 *       200:
 *         description: Successfully fetched available seats.
 *       400:
 *         description: Missing required parameters.
 *       404:
 *         description: No available seats found.
 *       500:
 *         description: Server error.
 */

router.get('/getAvailableSeats', busbookingController.getAllAvailableSeats);

// Export the router
module.exports = router;
