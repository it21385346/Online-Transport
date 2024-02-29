const mongoose = require('mongoose');
//create an variable
const addrequestSchema = new mongoose.Schema({
//declare attributes
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true  
    },
    comment:{
        type:String,
        require:true
    }
         
});


//export module
module.exports=mongoose.model('Addrequests',addrequestSchema)
