const PassangerRepository = require('../repository/passengeRepository');
const bcrypt = require('bcrypt');

class PassengerService {
  async passengerRegistration(nic_no, name, address, tele, email, password) {
    
    const hashedPswrd = await bcrypt.hash(password, 10);
    const passenger = { nic_no, full_name: name, address, contact_info: tele, email, password: hashedPswrd };
    const createPassenger = await PassangerRepository.addnewpassenger(passenger);
    return createPassenger;
  }

  async passengerVerification(contact_info, password){
    const passengerDetails = await PassangerRepository.findByTele(contact_info);
    if (!passengerDetails) {
      throw new Error('Invalid Telephone No');
    }
    else{
      const verifyPassword = await bcrypt.compare(password, passengerDetails.password);
      if (verifyPassword) {
        return passengerDetails;
      }
      else{
        throw new Error('invalid password');
      }
    }
  }
}

module.exports = new PassengerService();