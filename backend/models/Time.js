const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeSchema = new Schema({
    
    from : {
        type : String,
        required: true
    },

    to : {
        type: String,
        required: true
    },
    time : {
        type: String,
        required: true
    }
    
})

const Time = mongoose.model("Time",timeSchema);

module.exports = Time;