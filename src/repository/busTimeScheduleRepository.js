const { BusTimeSchedules, Buses, Routes } = require('../model');
const ScheduledBusDTO = require('../DataTransferObject/DetailsOfScheduledBus');

class BusTimeScheduleRepository {
    // Method to find schedules by route_id
    async findByRouteId(route_id) {
        return await BusTimeSchedules.findAll({ where: { route_id } });
    }

    // Method to filter schedules by arrival time and destination
    async filterByArrivalTimeAndDestination(arrivalTime, destination) {
        const results = await BusTimeSchedules.findAll({
            where: {
                arrival_time: arrivalTime,
            },
            include: [
                {
                    model: Routes,
                    required: true,
                    attributes: ['origin', 'destination'],
                    where: {
                        destination: destination, // Filter by destination in the Routes table
                    }
                },
                {
                    model: Buses,
                    required: true,
                    attributes: ['number_plate', 'type'],
                }
            ],
            attributes: ['departure_time', 'arrival_time', 'scheduled_date', 'status'],
        });

        // Transform results into the desired DTO format
        return results.map(schedule => ({
            origin: schedule.Route.origin, // Access 'origin' from the Routes model
            departure_time: schedule.departure_time,
            arrival_time: schedule.arrival_time,
            number_plate: schedule.Bus.number_plate, // Correct referencing of the bus model
            type: schedule.Bus.type,
            total_booked_seats: null, // Populate this if applicable in your system
        }));
    }
}

module.exports = new BusTimeScheduleRepository();
