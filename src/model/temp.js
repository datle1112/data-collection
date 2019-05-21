const mongoose = require('mongoose');
const tempSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true 
    },
    unit : {
        type : String,
        default : "°C"
    },
    value : {
        type : Number,
        required : true
    }
}, {
    timestamps : true // If set the "timestamps" to TRUE, mongoose assigns "createAt" and "updateAt" field to your schema 
})
const Temp = mongoose.model('Temp', tempSchema);

module.exports = Temp; 

