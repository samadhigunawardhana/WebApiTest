const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// const Buses = require('./busModel');
// BusTimeSchedules.belongsTo(Buses, { foreignKey: 'bus_ntc', targetKey: 'ntc_no' });


const BusTimeScheduleModel = sequelize.define('bus_time_schedules', {
    slot_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    route_id: DataTypes.INTEGER,
    bus_ntc: DataTypes.STRING,
    departure_time: DataTypes.TIME,
    arrival_time: DataTypes.TIME,
    scheduled_date: DataTypes.STRING,
    status: DataTypes.SMALLINT
}, {
    tableName: 'time_schedule_tbl',
    timestamps: false,
});

module.exports = BusTimeScheduleModel;