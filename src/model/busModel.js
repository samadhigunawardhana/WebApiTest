const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BusTimeSchedules = require('./busTimeScheduleModel');
Buses.hasMany(BusTimeSchedules, { foreignKey: 'bus_ntc', sourceKey: 'ntc_no' });


const Buses = sequelize.define('Busses', {
    ntc_no:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    number_plate: DataTypes.STRING,
    vehicle_capacity: DataTypes.INTEGER,
    type: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    operator_id: DataTypes.STRING,
    conductor_id: DataTypes.STRING
}, {
    tableName: 'busses',
    timestamps: false,
});

module.exports = Buses;