const express = require('express');
const PassengerController = require('../controller/passengerController');


const router = express.Router();

router.post('/register', PassengerController.passengerRegistration);
router.post('/login', PassengerController.passengerLogin);

module.exports = router;