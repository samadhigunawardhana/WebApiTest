const  Buses = require('../model/busModel');

class BusesRepository{
    async findByBusNTC(ntc_no){
        return await Buses.findAll({where: {ntc_no}})
    }

    async getBusTypeByNumberPlate(number_plate) {
        try {
            console.log(`Fetching bus type for vehicle register number: ${number_plate}`);
            const busType = await Buses.findOne({
                where: { vehicle_register_number: number_plate },
                attributes: ['type'],
            });
            console.log(`Retrieved bus type: ${busType?.type || 'Not Found'}`);
            return busType ? busType.type : null;
        } catch (error) {
            console.error('Error fetching bus type:', error);
            return null;
        }
    }
}

module.exports = new BusesRepository;