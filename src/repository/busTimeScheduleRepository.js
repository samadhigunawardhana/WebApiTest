const BusTimeSchedules = require('../model/busTimeScheduleModel');
const Buses = require('../model/busModel');
const ScheduledBusDTO = require('../dto/DetailsOfScheduledBus');

class BusTimeScheduleRepository {
    async findByRouteId(route_id) {
        return await BusTimeSchedules.findOne({ where: { route_id } });
    }

    async filterByArrivalTimeAndDestination(arrivalTime, destination) {
        const results = await BusTimeSchedules.findAll({
            where: {
                arrival_time: arrivalTime,
            },
            include: [{
                model: Buses,
                required: true,
                attributes: ['number_plate', 'type'],
            }],
            attributes: ['departure_time', 'arrival_time', 'schedule_date', 'status'],
        });

        // Convert results to DTOs
        return results.map(schedule => new ScheduledBusDTO(
            destination, // assuming destination as an input
            schedule.dataValues.arrival_time,
            schedule.dataValues.departure_time,
            schedule.dataValues.arrival_time,
            schedule.Bus.dataValues.number_plate,
            schedule.Bus.dataValues.type,
            null // Total booked seats can be populated if relevant logic is available
        ));
    }
}

module.exports = new BusTimeScheduleRepository();
