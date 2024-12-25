const BusTimeScheduleRepository = require('../repository/busTimeScheduleRepository');

class BusTimeScheduleService {
    async getTimeScheduleByRouteId(route_id) {
        return await BusTimeScheduleRepository.findByRouteId(route_id);
        
    }

    async filterByArrivalTimeAndDestination(arrivalTime, destination) {
        return await BusTimeScheduleRepository.filterByArrivalTimeAndDestination(arrivalTime, destination);
    }
}

module.exports = new BusTimeScheduleService();
