const {Client, LocalAuth} = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal');

const whatsappClient = new Client({
    authStrategy : new LocalAuth    
})

whatsappClient.on("qr", (qr)=>{
    qrcode.generate(qr,{small:true})
})

whatsappClient.on('ready',()=>{
    console.log("whatsapp client is ready now to send and recieve messages!")
});

whatsappClient.on('message', async (msg) => {
    try {
       
        const specificNumber = '917217616167';
   
        if (msg.from === specificNumber + '@c.us' && msg.body.toLowerCase() === 'bc') {
            console.log(`Received "hello" from ${specificNumber}`);
            await msg.reply('Hi! This is an automated reply. Please galiya mt do?');
        }else if (msg.from === specificNumber + '@c.us' && msg.body.toLowerCase() === 'hello') {
            console.log(`Received "hello" from ${specificNumber}`);
            await msg.reply('Hi! This is an automated reply. How can I assist you?');
        }else if (msg.from === specificNumber + '@c.us' && msg.body.toLowerCase() === 'bye') {
            console.log(`Received "hello" from ${specificNumber}`);
            await msg.reply('Hi! This is an automated reply.bye bye');
        }
    } catch (error) {
        console.error('Error processing message:', error);
    }
});

whatsappClient.on('auth_failure', msg => console.error('AUTHENTICATION FAILURE:', msg));

whatsappClient.on('disconnected', reason => console.error('Client disconnected:', reason));


module.exports = whatsappClient