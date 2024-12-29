const express = require('express');
const busbookingController = require('../controller/busBookingController');
const jasonWebTokenAuthentication = require('../config/jasonWebToken');

// Initialize the router
const router = express.Router();

// Define routes
router.post('/saveSeats', jasonWebTokenAuthentication, busbookingController.seatBooking);

// Define the route to get available seats


router.post('/getAvailableSeats', jasonWebTokenAuthentication, busbookingController.getAllAvailableSeats);

// Export the router
module.exports = router;
