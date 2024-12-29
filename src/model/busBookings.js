const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const BusBooking = sequelize.define('booking', {
    booking_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    payment_reciept_id: DataTypes.INTEGER,
    number_plate: DataTypes.STRING,
    scheduled_slot: DataTypes.INTEGER,
    booking_date: DataTypes.DATE,
    seat_no: DataTypes.STRING,
    passenger_id: DataTypes.STRING
}, {
    tableName: 'bookings',
    timestamps: false,
});

module.exports = BusBooking;