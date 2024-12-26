const { BusTimeSchedules, Buses } = require('../model');
const ScheduledBusDTO = require('../DataTransferObject/DetailsOfScheduledBus');

class BusTimeScheduleRepository {
    async findByRouteId(route_id) {
        return await BusTimeSchedules.findAll({ where: { route_id } });
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
                where: {
                    type: destination // Adjust this condition based on how 'destination' relates to the Bus model
                }
            }],
            attributes: ['departure_time', 'arrival_time', 'scheduled_date', 'status'],
        });

        // Transform results as per your DTO
        return results.map(schedule => ({
            origin: destination, // Adjust based on actual logic
            departure_time: schedule.departure_time,
            arrival_time: schedule.arrival_time,
            number_plate: schedule.Buss.number_plate,
            type: schedule.Buss.type,
            total_booked_seats: null, // Populate if you have this data
        }));
    }
}

module.exports = new BusTimeScheduleRepository();
