const express = require('express');
const router = express.Router();
const whatsappClient = require('../controllers/whatsappClient.js');

router.get('/',(req,res)=>{
    res.send('hello world');
})

router.post('/message', async (req, res) => {
    try {
        const { phoneNumber, message } = req.body;

        if (!phoneNumber || !message) {
            return res.status(400).send({ success: false, error: 'Phone number and message are required' });
        }

        console.log('Sending message to:', phoneNumber);

        await whatsappClient.sendMessage(phoneNumber, message);
        res.status(200).send({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send({ success: false, error: error.message });
    }
});


module.exports = router;