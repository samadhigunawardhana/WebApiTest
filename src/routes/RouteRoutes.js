const express = require('express');
const RouteControllerVariable = require('../controller/routesController');

const router = express.Router();

router.get('/getAllRoutes', RouteControllerVariable.getAllRoutes);

module.exports = router;