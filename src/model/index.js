const sequelize = require('../config/database');
const Buses = require('./busModel');
const BusTimeSchedules = require('./busTimeScheduleModel');

// Define Associations
Buses.hasMany(BusTimeSchedules, { foreignKey: 'bus_ntc', sourceKey: 'ntc_no' });
BusTimeSchedules.belongsTo(Buses, { foreignKey: 'bus_ntc', targetKey: 'ntc_no' });

// Export all models
module.exports = {
    Buses,
    BusTimeSchedules,
};
