const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RouteModel = sequelize.define('routes',{
    route_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    distance: DataTypes.FLOAT
}, {
    tableName: 'routes_tbl',
    timestamps: false,
});

module.exports = RouteModel;