const express = require('express');
const RouteControllerVariable = require('../controller/routesController');

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
router.get('/getAllRoutes', RouteControllerVariable.getAllRoutes);

module.exports = router;