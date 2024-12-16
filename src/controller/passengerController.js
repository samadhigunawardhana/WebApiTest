const passengerService = require('../service/passengerService');

class PassengerController {
  async passengerRegistration(req, res) {
    try {
      const { nic_no, full_name, address, contact_number, email, password } = req.body;
      const formatedContactNo = parseInt(contact_number, 10);
      const newPassenger = await passengerService.passengerRegistration(nic_no, full_name, address, formatedContactNo, email, password);
      res.status(201).json({ message: 'Passenger registered successfully', newPassenger: newPassenger.nic_no });
    } catch (error) {
      res.status(400).json({ error: error.message });
      
    }
  }
  async passengerLogin(req, res){
    try{
      const {tele, password} = req.body;
      const loginVerified = await passengerService.passengerVerification(tele, password);
      if (loginVerified) {
        res.status(200).json({ message: 'Passenger verified sucessfully' });
        
      }
    }catch(error){
      res.status(401).json({ error: error.message });
      
    }
  }
}

module.exports = new PassengerController();