const router = require("express").Router();
let Hirebus = require("../models/HireBus");

/*http://localhost:5000/vehicle/add */ 

router.route("/create").post((req,res)=>{

    const name = req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const from = req.body.from;
    const to1 = req.body.to1;
    const date = req.body.date;
    const questions = req.body.questions;

const newHireBus = new Hirebus({

    name,
    mobileNumber,
    from,
    to1,
    date,
    questions,

})

newHireBus.save().then(()=>{
    res.json("Hire Requested")

}).catch((err)=>{
    console.log(err);
})


})

/*http://localhost:5000/vehicle */

router.route("/").get((req,res)=>{

    Hirebus.find().then((hires)=>{
        res.json(hires)
    }).catch((err)=>{
        console.log(err)
    })

})


/*http://localhost:5000/vehicle/update/ */

router.route("/update/:id").put(async (req, res) =>{
    let hireID = req.params.id;
    const { name,mobileNumber,from,to1,date,questions} = req.body;

    const updateVehicle = {
        name,
        mobileNumber,
        from,
        to1,
        date,
        questions
       

    }

    const update = await Hirebus.findByIdAndUpdate(hireID,updateHireBus)
    .then(()=>{
        res.status(200).send({status: "Vehicle Updated"})
        
    }).catch((err) =>{
        console.log(err)
        res.status(500).send({status:"Updating data Err",error: err.message});
    })
})


/*http://localhost:5000/vehicle/delete/ */

router.route("/delete/:id").delete(async (req, res) =>{
    let hireID = req.params.id;

    await Hirebus.findByIdAndDelete(hireID)
    .then(()=>{
        res.status(200).send({status: "Hire Deleted"});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Deleting Err",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let hireID = req.params.id;

    const hirebus = await newHireBus.findById(hireID)
    .then((vehicle)=>{
        res.status(200).send({status: "Hire fetched", vehicle: vehicle});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Fetching Err",error: err.message});
    })
})

module.exports = router;
