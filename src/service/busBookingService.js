const BookingRepository = require('../repository/busBookingRepository');
const paymentRepository = require('../repository/paymentRepository');

class SeatBookingService {
    async availableSeats(seating = [], VehicleNumber, SlotsAllocated, date_of_booking) {
        try {
            const bookedSeats = await BookingRepository.getNumberOfSeatings(VehicleNumber, SlotsAllocated, date_of_booking);
            const availableSeats = seating.filter(seat => !bookedSeats.includes(seat.seatNumber));
            return availableSeats;
        } catch (error) {
            console.error('Error checking seat availability:', error);
            return [];
        }
    }
    
    async seatBooking(payload) {
        const { passenger_id, seat_number_list, bus_number_plate, scheduled_slot, total_amount, date_of_booking } = payload;
        
        try {
            const seatAvailability = await this.availableSeats(seat_number_list, bus_number_plate, scheduled_slot, date_of_booking);
            
            if (seatAvailability.length > 0) { 
                const paymentTime = new Date();
                const paymentData = { passenger_id, total_amount, payment_time: paymentTime };
                
                const paymentId = await paymentRepository.save(paymentData); 
                
                if (paymentId) {  
                    const bookingIds = [];
                    for (const seat_number of seat_number_list) {
                        const bookingData = {
                            passenger_id,
                            payment_slip_id: paymentId,  
                            bus_number_plate,
                            schedule_slot: scheduled_slot,
                            seat_number,
                            date_of_booking
                        };
                        const bookingId = await BookingRepository.save(bookingData);
                        bookingIds.push(bookingId);
                    }
                    return {
                        message: 'Seats booked successfully.',
                        booking_ids: bookingIds,
                        payment_id: paymentId
                    };
                } else {
                    throw new Error('Payment failed');  
                }
            } else {
                throw new Error('No available seats'); 
            }
        } catch (error) {
            console.error('Error during seat booking:', error);
            throw error;
        }
    }

   
}

module.exports = new SeatBookingService();

