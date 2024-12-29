import { Luxury, SemiLuxury, Ordinary } from './seats.js';

class BusSeatingUtils {
  async DoubleDeckerFiltering(BookSeats = []) {
    
    const filteredSeats = Luxury.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async CoachFiltering(BookSeats = []) {
    
    const filteredSeats = SemiLuxury.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async MiniBusFiltering(BookSeats = []) {
    
    const filteredSeats = Ordinary.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }
}

export default BusSeatingUtils;