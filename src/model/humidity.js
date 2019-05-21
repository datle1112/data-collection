const mongoose = require('mongoose');

const humiditySchema = new mongoose.Schema({
    desc: {
        type : String,
        required : true
    }, 
    id : {
        type : String, 
        required :true
    }, 
    unit : {
        type : String,
        default : "%"
    },
    value : {
        type : Number,
        required : true
    }
}, {
    timestamps : true
});

const Humidity = mongoose.model('Humidity', humiditySchema);

module.exports = Humidity;