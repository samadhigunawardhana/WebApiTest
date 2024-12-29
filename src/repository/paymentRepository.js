const Payment = require('../model/paymentReceipt');

class PaymentRepository {
    async save(paymentData) {
        try {
            const payment = await Payment.create(paymentData);  
            return payment.payment_reciept_id;  
        } catch (error) {
            console.error('Error saving payment:', error);
            throw error;
        }
    }
}

module.exports = new PaymentRepository();