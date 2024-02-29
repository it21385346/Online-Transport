const router= require("express").Router();
const { disconnect } = require("mongoose");
let EmpFeedback = require("../models/EmpFeedback");

//add feedback by driver
router.route("/addfe").post((req,res)=> {

    const username = req.body.username;
    const email=req.body.email;
    const type=req.body.type;
    const contactNumber=req.body.contactNumber;
    const message=req.body.message 

    const newEmpFeedback= new EmpFeedback({ //new feedback object
    
        username,
        email,
        type,
        contactNumber,
        message 
    })

    newEmpFeedback.save().then(()=>{
        //to be executed if successful
        res.json("Feedback Added")
    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

})


 //view all the data from table by drivers
 //view all the data from table
router.route("/readfe").get((req,res)=>{              
      EmpFeedback.find().then((EmpFeedback)=>{
            res.json(EmpFeedback)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

 //view all the data from table by admin
router.route("/readfeadmin").get((req,res)=>{              
    EmpFeedback.find().then((EmpFeedback)=>{
          res.json(EmpFeedback)
    }) .catch((err)=>{
         console.log(err)
    })
 
})
  
//update a feedback
router.route("/updatefe/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { username,email,type,contactNumber,message } =req.body; //destructure frontend variables passing to backend through a object

       const updateEmpFeedback= {       
        username,
        email,
        type,
        contactNumber,
        message,
         
       }

       const update = await EmpFeedback.findByIdAndUpdate(userId, updateEmpFeedback).then(() =>{
        res.status(200).send({status: "User updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

//delete feedback
router.route("/deletefe/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await EmpFeedback.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})

module.exports = router;