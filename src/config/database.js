const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ntcdatabase', 'webapi', '9FQZcBptOyng4pghV07QPHXEi0oNMzXC', {
  host: 'dpg-cteluurtq21c73blfimg-a',
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