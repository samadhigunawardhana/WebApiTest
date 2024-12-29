const express = require('express');
const busbookingController = require('../controller/busBookingController');

// Initialize the router
const router = express.Router();

// Define routes
router.post('/saveSeats', busbookingController.seatBooking);

// Define the route to get available seats
router.get('/getAvailableSeats', busbookingController.getAllAvailableSeats);

// Export the router
module.exports = router;
