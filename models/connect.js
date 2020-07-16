const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/employee",{useNewUrlParser:true, useUnifiedTopology:true }, (error) => {
    if(!error) { console.log("Connected to DB") }
    else { console.log("Error connecting to DB" + error) }
});

require('./empmodel');