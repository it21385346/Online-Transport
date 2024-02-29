const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminloginSchema = new Schema({

  

   email :{
         type: String,
         require: true
   },

   

   password: {
    type: String,
    require: true
   },

  

})

const AdminLogin = mongoose.model("AdminLogin", adminloginSchema);

module.exports = AdminLogin;
