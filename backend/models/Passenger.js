const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({

  username : {
        type : String,
        require: true
  },

  nic : {
        type : String,
        require: true
  },

   email :{
         type: String,
         require: true
   },

   phoneno : {
          type: Number,
          require: true
   },

   password: {
    type: String,
    require: true
   },

   userlevel: {
      type: String,
    },

    userleveldate :{
      type : Date,
  },


})

const Passenger = mongoose.model("Passenger", passengerSchema);

module.exports = Passenger;
