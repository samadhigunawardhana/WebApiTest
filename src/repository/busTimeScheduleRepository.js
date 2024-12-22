const BusTimeSchedules = require('../model/busTimeScheduleModel');

class BusTimeScheduleRepository{
    async findByRouteId(route_id){
        return await BusTimeSchedules.findOne({where: {route_id}});
    }
}

module.exports = new BusTimeScheduleRepository();