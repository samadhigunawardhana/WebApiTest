const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const PaymentReciept = sequelize.define('payment_reciept', {
    payment_reciept_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    passenger_id: DataTypes.STRING,
    payment_amount: DataTypes.FLOAT,
    booking_id: DataTypes.INTEGER,
    issued_time: DataTypes.TIME
}, {
    tableName: 'payment_reciept_history',
    timestamps: false,
});

module.exports = PaymentReciept;