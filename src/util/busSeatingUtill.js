import { Luxury, SemiLuxury, Ordinary } from './seats.js';

class BusSeatingUtils {
  async LuxuryFiltering(BookSeats = []) {
    
    const filteredSeats = Luxury.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async SemiLuxuryFiltering(BookSeats = []) {
    
    const filteredSeats = SemiLuxury.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async OrdinaryFiltering(BookSeats = []) {
    
    const filteredSeats = Ordinary.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  filterAvailableSemiLuxuryOrNormalSeats(bookedSeats) {
    console.log('Filtering available seats for Semi-Luxury or Normal buses...');
    const totalSeats = Array.from({ length: 40 }, (_, i) => `S${i + 1}`); // Example seat range
    const availableSeats = totalSeats.filter(seat => !bookedSeats.includes(seat));
    console.log('Available seats:', availableSeats);
    return availableSeats;
}

filterAvailableLuxurySeats(bookedSeats) {
    console.log('Filtering available seats for Luxury buses...');
    const totalSeats = Array.from({ length: 20 }, (_, i) => `L${i + 1}`); // Example seat range
    const availableSeats = totalSeats.filter(seat => !bookedSeats.includes(seat));
    console.log('Available seats:', availableSeats);
    return availableSeats;
}
}

export default BusSeatingUtils;