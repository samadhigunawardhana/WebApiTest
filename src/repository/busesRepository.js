const  Busses = require('../model/busModel');

class BusesRepository{
    async findByBusNTC(ntc_no){
        return await Busses.findAll({where: {ntc_no}})
    }
}

module.exports = new BusesRepository;