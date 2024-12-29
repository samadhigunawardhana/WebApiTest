const Booking = require('../model/busBookings'); 

class BusBookingRepository {
    async getNumberOfSeatings(bus_number_plate, schedule_slot,date_of_booking) {
        try {
            const seatsBooked = await Booking.findAll({
                where: {
                    number_plate: bus_number_plate, // Match model property
                    scheduled_slot: schedule_slot,
                    booking_date: date_of_booking, // Match model property
            },
            attributes: ['seat_no'], // Match model property
            });
    
           
            return seatsBooked.map(seat => seat.seat_number);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async save(bookingData) {
        try {
            const booking = await Booking.create(bookingData);
            return booking.booking_id;
        } catch (error) { 
            console.error('Error saving booking:', error);
            throw error;
        }
    }
    
}

module.exports = new BusBookingRepository();