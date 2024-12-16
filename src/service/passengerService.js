const PassangerRepository = require('../repository/passengeRepository');
const bcrypt = require('bcrypt');

class PassengerService {
  async passengerRegistration(ID_no, name, address, tele, email, pwd) {
    
    const hashedPswrd = await bcrypt.hash(password, 10);
    const passenger = { ID_no, name, address, tele, email, pwd: hashedPswrd };
    const createPassenger = await PassangerRepository.addnewpassenger(passenger);
    return createPassenger;
  }

  async passengerVerification(tele, pwd){
    const passengerDetails = await PassangerRepository.findByTele(tele);
    if (!passengerDetails) {
      throw new Error('Invalid Telephone No');
    }
    else{
      const verifyPassword = await bcrypt.compare(pwd, passengerDetails.pwd);
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