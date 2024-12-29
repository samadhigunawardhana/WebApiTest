const busBookingService = require('../service/busBookingService');

class BusBookingController {
    async seatBooking(req, res) {
        try {
            const payload = req.body;
            const newBooking = await busBookingService.seatBooking(payload);

           
            return res.status(201).json({
                message: newBooking.message,
                booking_ids: newBooking.booking_ids,
                payment_id: newBooking.payment_id,
            });
        } catch (error) {
            console.error('Error creating booking:', error);

            
            if (error instanceof Error && error.status) {
                return res.status(error.status).json({ message: error.message, details: error.details || undefined });
            }

           
            return res.status(500).json({ message: 'Internal Server Error', error: error.message || error });
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

module.exports = new BusBookingController();