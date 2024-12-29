const passengerService = require('../service/passengerService');
const jwt = require('jsonwebtoken');

const JSON_SECRET_kEY = "d4f7b2e1c9a8f3g6h1k0j4p9l2m8o7r6x5v2y3z1t0w9n8b6q5s7v4u1y3k8t5";

class PassengerController {
  async passengerRegistration(req, res) {
    try {
        console.log("Received request body:", req.body); // Log the incoming request body

        const { nic_no, full_name, address, contact_number, email, password } = req.body;

        // Log each extracted field
        console.log("Extracted fields:");
        console.log("NIC Number:", nic_no);
        console.log("Full Name:", full_name);
        console.log("Address:", address);
        console.log("Contact Number:", contact_number);
        console.log("Email:", email);
        console.log("Password:", password);

        // Validate fields
        if (!nic_no || !full_name || !address || !contact_number || !email || !password) {
            throw new Error('All fields are required');
        }

        const formattedContactNo = parseInt(contact_number, 10);
        console.log("Formatted Contact Number:", formattedContactNo); // Log formatted contact number

        if (isNaN(formattedContactNo)) {
            throw new Error('Invalid contact number');
        }

        // Log before calling the service
        console.log("Calling passengerService.passengerRegistration...");

        const newPassenger = await passengerService.passengerRegistration(
            nic_no, full_name, address, formattedContactNo, email, password
        );

        // Log service response
        console.log("Service returned new passenger:", newPassenger);

        res.status(201).json({
            message: 'Passenger registered successfully',
            newPassenger: newPassenger.nic_no
        });
    } catch (error) {
        console.error("Error occurred:", error.message); // Log the error message
        res.status(400).json({ error: error.message });
    }
}


  async passengerLogin(req, res){
    try{
      const {contact_info, password} = req.body;
      const loginVerified = await passengerService.passengerVerification(contact_info, password);
      if (loginVerified) {
        const jasonwebToken = jwt.sign({ contact_info, password }, JSON_SECRET_kEY, { expiresIn: '3h' });
        res.status(200).json({ message: 'Passenger verified sucessfully', jasonwebToken});
        
      }
    }catch(error){
      res.status(401).json({ error: error.message });
      
    }
  }
}

module.exports = new PassengerController();