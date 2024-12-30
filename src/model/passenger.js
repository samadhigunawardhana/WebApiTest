const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Passenger = sequelize.define('passenger', {
  nic_no: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  full_name: DataTypes.STRING,
  address: DataTypes.STRING,
  contact_info: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'passenger_tbl',
  timestamps: false,
});

module.exports = Passenger;