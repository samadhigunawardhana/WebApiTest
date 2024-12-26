const sequelize = require('../config/database');
const Buses = require('./busModel');
const BusTimeSchedules = require('./busTimeScheduleModel');
const Routes = require('./routesModel');

// Define Associations
Buses.hasMany(BusTimeSchedules, { foreignKey: 'bus_ntc', sourceKey: 'ntc_no' });
BusTimeSchedules.belongsTo(Buses, { foreignKey: 'bus_ntc', targetKey: 'ntc_no' });

Routes.hasMany(BusTimeSchedules, { foreignKey: 'route_id', sourceKey: 'route_id' });
BusTimeSchedules.belongsTo(Routes, { foreignKey: 'route_id', targetKey: 'route_id' });

// Export all models
module.exports = {
    Buses,
    BusTimeSchedules,
    Routes,
};
