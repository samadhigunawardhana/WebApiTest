// index.js
const Buses = require('./busModel');
const BusTimeSchedules = require('./busTimeScheduleModel');
const Routes = require('./routesModel');

// Define Associations with Aliases
Buses.hasMany(BusTimeSchedules, { foreignKey: 'bus_ntc', sourceKey: 'ntc_no', as: 'bus' });
BusTimeSchedules.belongsTo(Buses, { foreignKey: 'bus_ntc', targetKey: 'ntc_no', as: 'bus' });

Routes.hasMany(BusTimeSchedules, { foreignKey: 'route_id', sourceKey: 'route_id', as: 'route' });
BusTimeSchedules.belongsTo(Routes, { foreignKey: 'route_id', targetKey: 'route_id', as: 'route' });

// Export all models
module.exports = {
    Buses,
    BusTimeSchedules,
    Routes,
};
