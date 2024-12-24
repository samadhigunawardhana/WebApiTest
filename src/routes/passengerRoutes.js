const express = require('express');
const PassengerController = require('../controller/passengerController');


const router = express.Router();
/**
 * @swagger
 * /register:
 *   post:
 *     summary: New passenger Register
 *     description: End point of Register
 *     responses:
 *       200:
 *         description: Successfully registered.
 */
router.post('/register', PassengerController.passengerRegistration);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Passenger Login
 *     description: End point of passenger login
 *     responses:
 *       200:
 *         description: Successfully login.
 */
router.post('/login', PassengerController.passengerLogin);

module.exports = router;