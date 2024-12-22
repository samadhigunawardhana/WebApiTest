const {DataTypes } = require('sequelize'); 
const sequelize = require('../config/database'); 
const BusOwner = sequelize.define('bus_owner',{ 
    nic_no: { 
        type: DataTypes.STRING, 
        primaryKey: true, 
    }, 
    full_name: DataTypes.STRING, 
    date_of_birth: DataTypes.DATE, 
    contact_info: DataTypes.INTEGER, 
    address: DataTypes.STRING, 
}, { 
    tableName: 'bus_owner', 
    timestamps: false, 
}); 

module.exports = BusOwner;