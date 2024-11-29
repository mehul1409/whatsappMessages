const express = require('express');
const router = express.Router();
const whatsappClient = require('../services/whatsappClient.js');

router.get('/',(req,res)=>{
    res.send('hello world');
})

router.post('/message', async (req, res) => {
    try {
        const { phoneNumber, message } = req.body;

        // Validate input
        if (!phoneNumber || !message) {
            return res.status(400).send({ success: false, error: 'Phone number and message are required' });
        }

        // Validate phone number format (international format)
        // if (!/^\+\d{10,15}$/.test(phoneNumber)) {
        //     return res.status(400).send({ success: false, error: 'Invalid phone number format. Use international format (e.g., +1234567890).' });
        // }
        console.log('Sending message to:', phoneNumber);

        // Send the message
        await whatsappClient.sendMessage(phoneNumber, message);
        res.status(200).send({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send({ success: false, error: error.message });
    }
});


module.exports = router;