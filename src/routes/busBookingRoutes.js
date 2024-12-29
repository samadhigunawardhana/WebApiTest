const express = require('express');
const busbookingController = require('../controller/busBookingController');

const routes = express.Router();
routes.post('/saveSeats', busbookingController.seatBooking);
module.exports = routes;