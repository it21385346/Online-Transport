//write all http request for crud
const express = require('express');
const Addrequests = require('../models/addrequests')
const router =  express.Router();

//save request
router.post('/addrequest/save',(req,res)=>{
    let newAddrequest = new Addrequests(req.body) //access frontend detail
 
    newAddrequest.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request saved Successfully"
        });
    });
});

//read bookings

router.get('/addrequests',(req,res)=>{
    Addrequests.find().exec((err,addrequests)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
        success:true,
        existingAddrequests : addrequests
    });
    
    });
});
//get a specific bookings
router.get("/addrequest/:id",(req,res)=>{
    let addrequestId = req.params.id;     //pass post's id as parameter
    
Addrequests.findById(addrequestId,(err,post)=>{
    if(err){
        return res.status(400).json({success:false,err});
    }
        return res.status(200).json({
            success:true,
            post
        });
});
 });

module.exports = router;
