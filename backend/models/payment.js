const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    name:{
        type: String,
        
        
    },
    address:{
        type: String,
              
    },
    city:{
        type: String,
        
    },
    postalcode:{
        type: String,
       
    },
    phonenum:{
        type: String,
        
    },
    cardnum:{
        type: String,
    },
    expirydate:{
        type: String,
    },
    ccv:{
        type: String,
    }
  
})

const Payment = mongoose.model("payment", paymentSchema);

module.exports = Payment;