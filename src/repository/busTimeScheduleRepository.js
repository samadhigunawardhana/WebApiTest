const { BusTimeSchedules, Buses, Routes } = require('../model');

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
                    },
                    as: 'route', // Match the alias defined in the associations
                },
                {
                    model: Buses,
                    required: true,
                    attributes: ['number_plate', 'type'],
                    as: 'bus', // Match the alias defined in the associations
                }
            ],
            attributes: ['departure_time', 'arrival_time', 'scheduled_date', 'status'],
        });

        // Transform results into the desired DTO format
        return results.map(schedule => ({
            origin: schedule.route ? schedule.route.origin : 'Unknown', // Null check for route
            departure_time: schedule.departure_time,
            arrival_time: schedule.arrival_time,
            number_plate: schedule.bus ? schedule.bus.number_plate : 'Unknown', // Null check for bus
            type: schedule.bus ? schedule.bus.type : 'Unknown', // Null check for bus
            total_booked_seats: null, // Populate this if applicable in your system
        }));
    }
}

module.exports = new BusTimeScheduleRepository();
