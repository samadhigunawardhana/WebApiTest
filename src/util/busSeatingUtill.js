
const { Luxury, SemiLuxury, Ordinary } = require('./seats.js'); 

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

 
}

module.exports = new BusSeatingUtils();