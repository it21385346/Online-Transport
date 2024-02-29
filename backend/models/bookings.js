const mongoose = require('mongoose');
//create an variable
const bookingSchema = new mongoose.Schema({
//declare attributes
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true  
    },
    route:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    seatno:{
        type:Number,
        required:true
    }
       
});


//export module
module.exports=mongoose.model('Bookings',bookingSchema)
