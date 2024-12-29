const express = require('express');
const RouteControllerVariable = require('../controller/routesController');
const jasonWebTokenAuthentication = require('../config/jasonWebToken');

const router = express.Router();

/**
 * @swagger
 * /bus-routes/getAllRoutes:
 *   get:
 *     summary: get All Routes
 *     description: set all routes
 *     responses:
 *       200:
 *         description: Successfully set all routes.
 */
router.get('/getAllRoutes', jasonWebTokenAuthentication, RouteControllerVariable.getAllRoutes);

module.exports = router;