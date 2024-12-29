const passengerService = require('../service/passengerService');
const jwt = require('jsonwebtoken');

const JSON_SECRET_kEY = "d4f7b2e1c9a8f3g6h1k0j4p9l2m8o7r6x5v2y3z1t0w9n8b6q5s7v4u1y3k8t5";

class PassengerController {
  async passengerRegistration(req, res) {
    try {
        const { nic_no, full_name, address, contact_number, email, password } = req.body;

        if (!nic_no || !full_name || !address || !contact_number || !email || !password) {
            throw new Error('All fields are required');
        }

        const formattedContactNo = parseInt(contact_number, 10);
        if (isNaN(formattedContactNo)) {
            throw new Error('Invalid contact number');
        }

        const newPassenger = await passengerService.passengerRegistration(
            nic_no, full_name, address, formattedContactNo, email, password
        );

        res.status(201).json({
            message: 'Passenger registered successfully',
            newPassenger: newPassenger.nic_no
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

  async passengerLogin(req, res){
    try{
      const {tele, password} = req.body;
      const loginVerified = await passengerService.passengerVerification(tele, password);
      if (loginVerified) {
        const jasonwebToken = jwt.sign({ tele, password }, JSON_SECRET_kEY, { expiresIn: '3h' });
        res.status(200).json({ message: 'Passenger verified sucessfully', jasonwebToken});
        
      }
    }catch(error){
      res.status(401).json({ error: error.message });
      
    }
  }
}

module.exports = new PassengerController();