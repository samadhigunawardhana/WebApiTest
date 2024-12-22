const BusTimeSchedulesRepository = require('../repository/busTimeScheduleRepository');

class BusTimeScheduleService{
    async getTimeScheduleByRouteId(route_id){
        return await BusTimeScheduleRepository.findByRouteId(route_id);
    }
}

module.exports = new BusTimeScheduleService();