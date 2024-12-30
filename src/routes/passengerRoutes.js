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
 * /passenger/login:
 *   post:
 *     summary: Passenger login
 *     description: Authenticate a passenger using their contact information and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contact_info:
 *                 type: integer
 *                 description: The contact information of the passenger (e.g., phone number).
 *               password:
 *                 type: string
 *                 description: The password of the passenger.
 *             required:
 *               - contact_info
 *               - password
 *     responses:
 *       200:
 *         description: Successfully authenticated the passenger.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token for the authenticated passenger.
 *                 passenger_id:
 *                   type: string
 *                   description: The unique ID of the passenger.
 *       400:
 *         description: Invalid input or missing required fields.
 *       401:
 *         description: Authentication failed due to incorrect credentials.
 *       500:
 *         description: Server error.
 */

router.post('/login', PassengerController.passengerLogin);

module.exports = router;