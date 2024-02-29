const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirebuschema =  new Schema({

    name : {
        type : String,
        required: true
    },

    mobileNumber : {
        type : Number,
        required: true
    },
    from : {
        type : String,
        required: true
    },
    to1:{
        type:String,
        required: true
    },
    date :{
        type: String,
        required: true
    },
    questions :{
        type:String,
        required: true
    },
   



})

const Hirebus = mongoose.model("Hirebus",hirebuschema);

module.exports = Hirebus;   