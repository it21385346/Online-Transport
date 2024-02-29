const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    reviewID :{
        type: String,
        required :true
    },

    passengerName :{
        type: String,
        required :true
    },

    date :{
        type: Date,
        required :true
    },

    rating :{
        type: String,
        required :true
    },

    description :{
        type: String,
        required :true
    }
 
})

const Review = mongoose.model("Review",reviewSchema);

module.exports = Review;