//model is a blueprint like a class
const mongoose = require('mongoose');//require is used to export
//template given as a document to store in mongo DB
const Schema = mongoose.Schema;//schema is the place where attributes stored
//object creation
const salarySchema = new Schema({
    //properties declare
    empID : {
        type : String,
        required : true,//backend validation
        unique: true

    },
    basicSalary : {
        type : Number,
        required : true//backend validation

    },
    OT : {
        type : Number,
        required : true//backend validation

    }, 
    allowances : {
        type : Number,
        required : true//backend validation

    },
    payrollDeduct : {
        type : Number,
        required : true//backend validation

    },
    netSalary : {
        type : Number
        
    },
    salaryPeriod : {
        type : String,
        required : true//backend validation

    },
})
//data coming from routes go to DB through models
//declare which schema goes to which table
const salary = mongoose.model("SalaryDetails",salarySchema);//table name,schema created 
module.exports = salary;//export the module