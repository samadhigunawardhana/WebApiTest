const BusTimeSchedulesRepository = require('../repository/busTimeScheduleRepository');

class BusTimeScheduleService{
    async getTimeScheduleByRouteId(route_id){
        return await BusTimeScheduleRepository.findByRouteId(route_id);
    }

    async filterByArrivalTimeAndDestination(arrivalTime, destination) {
        return await BusTimeSchedulesRepository.filterByArrivalTimeAndDestination(arrivalTime, destination);
    }
}

module.exports = new BusTimeScheduleService();