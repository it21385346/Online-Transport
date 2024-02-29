//write all http request for crud
const express = require('express');
const Bookings = require('../models/bookings')
const router =  express.Router();

//save booking
router.post('/post/save',(req,res)=>{
    let newBooking = new Bookings(req.body) //access frontend detail
 
    newBooking.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Booking saved Successfully"
        });
    });
});

//read bookings

router.get('/bookings',(req,res)=>{
    Bookings.find().exec((err,bookings)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
        success:true,
        existingBookings : bookings
    });
    
    });
});
//get a specific bookings
router.get("/post/:id",(req,res)=>{
    let bookingId = req.params.id;     //pass post's id as parameter
    
Bookings.findById(bookingId,(err,post)=>{
    if(err){
        return res.status(400).json({success:false,err});
    }
        return res.status(200).json({
            success:true,
            post
        });
});
 });

//update bookings
router.put('/post/update/:id',(req,res)=>{
    Bookings.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
    (err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
    return res.status(200).json({
        success:"Updated Sucessfully "
    });
    }
    );
});

//cancel bookings
router.delete('/post/delete/:id',(req,res)=>{
    Bookings.findByIdAndRemove(req.params.id).exec((err,deletedBooking) =>{
        if(err)
            return res.status(400).json({
                message:"Delete Unsuccessful",err
            
    });
    return res.status(200).json({
        message:"Delete Sucessfully",deletedBooking
});

    });
});
module.exports = router;

