const BusTimeSchedulesService = require('../service/busTimeScheduleService');
const SeatBookingService = require('../service/busBookingService');

class BusTimeScheduleController {
    // Fetch schedules by route ID
    async getSchedulesByRouteId(req, res) {
        try {
            const { route_id } = req.params;

            if (!route_id) {
                return res.status(400).json({ message: 'Route ID is required' });
            }

            const allSchedules = await BusTimeSchedulesService.getTimeScheduleByRouteId(route_id);
            res.status(200).json(allSchedules);

            console.log(`Successfully fetched all schedule information for route ID: ${route_id}`);
        } catch (error) {
            console.error('Error fetching schedules:', error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }

    // Filter schedules by arrival time and destination
    async filterSchedulesByArrivalTimeAndDestination(req, res) {
        try {
            const { arrivalTime, destination } = req.body;

            if (!arrivalTime || !destination) {
                return res.status(400).json({ message: 'Arrival time and destination are required' });
            }

            const schedules = await BusTimeSchedulesService.filterByArrivalTimeAndDestination(arrivalTime, destination);

            if (!schedules || schedules.length === 0) {
                return res.status(404).json({ message: 'No schedules found for the given criteria' });
            }

            return res.status(200).json({ schedules });
        } catch (error) {
            console.error('Error filtering schedules:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }

    // Fetch all available seats
    async getAllAvailableSeats(req, res) {
        try {
            console.log('Received request to fetch available seats');
            const { number_plate, scheduled_slot, booking_date } = req.body;

            if (!number_plate || !scheduled_slot || !booking_date) {
                return res.status(400).json({ message: 'Number plate, scheduled slot, and booking date are required' });
            }

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
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
}

module.exports = new BusTimeScheduleController();
