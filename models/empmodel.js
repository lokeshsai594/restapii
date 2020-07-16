const mongoose = require('mongoose');

const empSchema = mongoose.Schema({ 
    fullname: { type: String},
    email: { type: String},
    mobile: { type: String},
    city: { type: String}
});


module.exports = mongoose.model('emp', empSchema);