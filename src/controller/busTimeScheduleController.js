const BusTimeSchedulesService = require('../service/busTimeScheduleService');


class BusTimeScheduleController {
    async getSchedulesByRouteId(req, res){
        try {
            const { route_id } = req.params;
            const allSchedules = await BusTimeSchedulesService.getTimeScheduleByRouteId(route_id);
            res.status(200).json(allSchedules);
            console.log(`Successfully fetched all schedule informations under routeId : ${route_id}`);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async filterSchedulesByArrivalTimeAndDestination(req, res) {
        try {
            const { arrivalTime, destination } = req.body;

            if (!arrivalTime || !destination) {
                return res.status(400).json({ message: "Arrival time and destination are required" });
            }

            const schedules = await BusTimeSchedulesService.filterByArrivalTimeAndDestination(arrivalTime, destination);
            return res.status(200).json(schedules);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    async getAllAvailableSeats(req, res) {
        try {
            console.log('Received request to fetch available seats');
            const { number_plate, scheduled_slot, booking_date } = req.body;

            const availableSeats = await SeatBookingService.getAllAvailableSeats(
                number_plate,
                scheduled_slot,
                booking_date
            );

            if (availableSeats && availableSeats.length > 0) {
                console.log('Successfully fetched available seats');
                res.status(200).json({ availableSeats });
            } else {
                console.warn('No available seats found');
                res.status(404).json({ message: 'No available seats' });
            }
        } catch (error) {
            console.error('Error occurred while fetching available seats:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
module.exports = new BusTimeScheduleController();