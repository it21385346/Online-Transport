//model is a blueprint like a class
const mongoose = require('mongoose');//require is used to export
//template given as a document to store in mongo DB
const Schema = mongoose.Schema;//schema is the place where attributes stored
//object creation
const employeeSchema = new Schema({
    //properties declare
    empID : {
        type : String,
        required : true,//backend validation
        unique: true

    },
    full_name : {
        type : String,
        required : true//backend validation

    },
    
    dob : {
        type : String,
        required : true//backend validation

    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true//backend validation

    },
    nationality : {
        type : String,
        required : true//backend validation

    },
    marital_status : {
        type : String,
        required : true//backend validation

    },
    phoneNo : {
        type : Number,
        required : true//backend validation

    },
    email : {
        type : String,
        required : true//backend validation

    },
    add : {
        type : String,
        required : true//backend validation

    },
    regDate :{
        type : String,
        required : true//backend validation
    },
})
//data coming from routes go to DB through models
//declare which schema goes to which table
const employee = mongoose.model("Employee",employeeSchema);//table name,schema created 
module.exports = employee;//export the module