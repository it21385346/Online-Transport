const mongoose = require('mongoose'); //export
const Schema = mongoose.Schema; //store attributes in schema

const empFeedbackSchema = new Schema({ //create new object

     
  //properties
    username :{
        type: String, //data type
        required :true //validation
    },

    email :{
        type: String, //data type
        required :true //validation
    },

    type :{
        type: String, //data type
        required :true //validation
         
    },

    contactNumber :{
        type: String, //data type
        required :true //validation
    },

    message :{
        type: String, //data type
        required :true //validation
    },

    
})

const EmpFeedback = mongoose.model("EmpFeedback",empFeedbackSchema); //feedback schema data goes to feedback table

module.exports = EmpFeedback;