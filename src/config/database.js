const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ntcdatabase_iav4', 'webapi', 'PflM35bMjTfOWoalI24gSlVptJbzr1kh', {
  host: 'dpg-ctpc4lrqf0us73eag7eg-a',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


module.exports = sequelize;