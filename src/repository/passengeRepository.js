const Passenger = require('../model/passenger');

class PassengerRepository {
  async addnewpassenger(passenger) {
    const newPassenger = await Passenger.create(passenger);
    return newPassenger;
  }

  async findByTele(contact_info){
    return await Passenger.findOne({where: { contact_info }})
  }
}

module.exports = new PassengerRepository();