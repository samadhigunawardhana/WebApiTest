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
    
           
            return seatsBooked.map(seat => seat.seat_no);
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

    async getBookedSeatsListByNumberPlateAndTimeSlot(number_plate, scheduled_slot, booking_date) {
        try {
            console.log(`Fetching booked seats for vehicle: ${number_plate}, slot: ${scheduled_slot}, date: ${booking_date}`);
            const bookedSeats = await BusBooking.findAll({
                where: {
                    number_plate,
                    scheduled_slot,
                    booking_date,
                },
                attributes: ['seat_no'],
            });
            console.log(`Retrieved booked seats: ${bookedSeats.map(seat => seat.seat_no)}`);
            return bookedSeats.map(seat => seat.seat_no);
        } catch (error) {
            console.error('Error fetching booked seats:', error);
            return [];
        }
    }
    
}

module.exports = new BusBookingRepository();