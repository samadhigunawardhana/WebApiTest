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
}

module.exports = new BusBookingController();