const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'bus-booking-system',
      version: '1.0.0',
      description: 'BUS API End points',
    },
    servers: [
      {
        url: 'https://webapitest-n5jd.onrender.com',
        description: 'Bus Booking System',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Location of your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;