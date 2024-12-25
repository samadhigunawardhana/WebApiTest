const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


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
    tableName: 'buses',
    timestamps: false,
});

module.exports = Buses;