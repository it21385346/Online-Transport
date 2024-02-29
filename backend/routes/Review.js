const router= require("express").Router();
let Review = require("../models/Review");

router.route("/add").post((req,res)=> {


    const reviewID=req.body.reviewID;
    const passengerName = req.body.passengerName;
    const date=Date(req.body.date);
    const rating=req.body.rating;
    const description=req.body.description;
     
    const newReview= new Review({
        reviewID,
        passengerName,
        date,
        rating,
        description
         
    })

    newReview.save().then(()=>{
        //to be executed if successful
        res.json("Review Added")
    }).catch((err)=>{
              console.log(err);
    })

})

router.route("/").get((req,res)=>{               //view
      Review.find().then((Review)=>{
            res.json(Review)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

//update
router.route("/update/:reviewID").put(async(req,res)=> {
       let userId= req.params.reviewID;
       const {passengerName,date,rating,description} =req.body;

       const updateReview= {
        passengerName,
        date,
        rating,
        description
       }

       const update = await Review.findOneAndUpdate(userId, updateReview).then(() =>{
        res.status(200).send({status: "Review updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

router.route("/delete/:reviewID").delete(async(req,res) =>{
       let userId=req.params.reviewID;

       await Review.findOneAndDelete(userId).then(() =>{
        res.status(200).send({status: "Review deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete review", error:err.message});
    })
       
})

 
module.exports = router;