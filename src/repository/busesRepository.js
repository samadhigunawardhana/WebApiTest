const  Buses = require('../model/busModel');

class BusesRepository{
    async findByBusNTC(ntc_no){
        return await Buses.findAll({where: {ntc_no}})
    }
}

module.exports = new BusesRepository;