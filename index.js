const express = require('express');
const app = express();
const messageRouter = require('./routes/messageRoute.js');
const whatsappClient = require('./controllers/whatsappClient.js');

whatsappClient.initialize();
app.use(express.json());

app.use('/user',messageRouter);

app.listen(3000,()=>{
    console.log('Server started at port no. 3000');
})