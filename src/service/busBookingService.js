const BookingRepository = require('../repository/busBookingRepository');
const paymentRepository = require('../repository/paymentRepository');

class BusBookingService {
    async availableSeats(seating = [], VehicleNumber, SlotsAllocated, date_of_booking) {
        try {
            console.log('Checking available seats:', { seating, VehicleNumber, SlotsAllocated, date_of_booking });
            const bookedSeats = await BookingRepository.getNumberOfSeatings(VehicleNumber, SlotsAllocated, date_of_booking);
            console.log('Booked seats retrieved:', bookedSeats);
            
            const availableSeats = seating.filter(seat => !bookedSeats.includes(seat.seatNumber));
            console.log('Available seats:', availableSeats);
            return availableSeats;
        } catch (error) {
            console.error('Error checking seat availability:', error);
            return [];
        }
    }
    
    async seatBooking(payload) {
        console.log('Seat booking payload received:', payload);
        const { passenger_id, seat_number_list, bus_number_plate, scheduled_slot, total_amount, date_of_booking } = payload;
        
        try {
            console.log('Checking seat availability...');
            const seatAvailability = await this.availableSeats(seat_number_list, bus_number_plate, scheduled_slot, date_of_booking);
            console.log('Seat availability:', seatAvailability);
            
            if (seatAvailability.length > 0) { 
                const paymentTime = new Date();
                const paymentData = { passenger_id, total_amount, payment_time: paymentTime };
                console.log('Saving payment data:', paymentData);
                
                const paymentId = await paymentRepository.save(paymentData);
                console.log('Payment saved successfully. Payment ID:', paymentId);
                
                if (paymentId) {  
                    const bookingIds = [];
                    for (const seat_no of seat_number_list) {
                        const bookingData = {
                            passenger_id,
                            payment_reciept_id: paymentId,
                            number_plate: bus_number_plate,
                            scheduled_slot,
                            seat_no,
                            booking_date: date_of_booking
                        };
                        console.log('Saving booking data:', bookingData);
                        
                        const bookingId = await BookingRepository.save(bookingData);
                        console.log('Booking saved successfully. Booking ID:', bookingId);
                        
                        bookingIds.push(bookingId);
                    }
                    console.log('All seats booked successfully:', { booking_ids: bookingIds, payment_id: paymentId });
                    return {
                        message: 'Seats booked successfully.',
                        booking_ids: bookingIds,
                        payment_id: paymentId
                    };
                } else {
                    throw new Error('Payment failed');
                }
            } else {
                console.warn('No available seats for the given criteria.');
                throw new Error('No available seats');
            }
        } catch (error) {
            console.error('Error during seat booking:', error);
            throw error;
        }
    }

    async getAllAvailableSeats(number_plate, scheduled_slot, booking_date) {
        try {
            console.log('Fetching seat availability information...');
            const busType = await BookingRepository.getBusTypeByNumberPlate(number_plate);
            console.log('Bus type retrieved:', busType);

            if (!busType) {
                console.error('No bus type found for the given number plate');
                return [];
            }

            const bookedSeats = await BookingRepository.getBookedSeatsListByNumberPlateAndTimeSlot(
                number_plate,
                scheduled_slot,
                booking_date
            );
            console.log('Booked seats retrieved:', bookedSeats);

            let availableSeats = [];
            if (busType === 'Semi-Luxury') {
                availableSeats = await busSeatingUtils.SemiLuxuryFiltering(bookedSeats);
            } else if (busType === 'Luxury') {
                availableSeats = await busSeatingUtils.LuxuryFiltering(bookedSeats);
            } else if (busType === 'Ordinary') {
                availableSeats = await busSeatingUtils.OrdinaryFiltering(bookedSeats);
            }

            console.log('Successfully fetched available seats:', availableSeats);
            return availableSeats;
        } catch (error) {
            console.error('Error occurred while fetching available seats:', error);
            return [];
        }
    }
}

module.exports = new BusBookingService();
