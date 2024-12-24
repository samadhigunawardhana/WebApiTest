const express = require('express');
const PassengerController = require('../controller/passengerController');


const router = express.Router();
/**
 * @swagger
 * /passenger:
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
 * /passenger:
 *   post:
 *     summary: Passenger Login
 *     description: End point of passenger login
 *     responses:
 *       200:
 *         description: Successfully login.
 */
router.post('/login', PassengerController.passengerLogin);

module.exports = router;