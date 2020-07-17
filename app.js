const express = require('express');
const connectDB = require('./models/connect');
const logger = require('./config/logger');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json())       //we arecalling the bodyparser functionality

PORT = process.env.port || 3000

const employeeController = require('./controllers/empolyeeroutes');    //middleware
app.use('/employee', employeeController);  


app.get( '/', (req, res) => {
    res.send(" Welcome to home employee info...");
});

connectDB;   //connecting to local mongoDB

app.listen(PORT, () => {                                  
    logger.log('info',`server started at port: ${PORT}`);
});