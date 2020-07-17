const mongoose = require('mongoose');
const logger = require('../config/logger');


mongoose.connect("mongodb://localhost:27017/restapi",{useNewUrlParser:true, useUnifiedTopology:true }, (error) => {
    if(!error) { logger.log('info',"Successfully Connected to DB") }
    else { logger.log('error',"Error connecting to DB, "+ error ) }
});

require('./empmodel');