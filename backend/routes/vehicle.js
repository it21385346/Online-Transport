

const router = require("express").Router();
let Vehicle = require("../models/Vehicle");

/*http://localhost:5000/vehicle/add */ 

router.route("/create").post((req,res)=>{

    const vehicleNo = req.body.vehicleNo;
    const vModel = req.body.vModel;
    const nicNo = req.body.nicNo;
    const ownerName = req.body.ownerName;
    const manufacYear = Number(req.body.manufacYear);
    const vType = req.body.vType;

const newVehicle = new Vehicle({

    vehicleNo,
    vModel,
    nicNo,
    ownerName,
    manufacYear,
    vType,

})

newVehicle.save().then(()=>{
    res.json("Vehicle added")

}).catch((err)=>{
    console.log(err);
})


})

/*http://localhost:5000/vehicle */

router.route("/").get((req,res)=>{

    Vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })

})


/*http://localhost:5000/vehicle/update/ */

router.route("/update/:id").put(async (req, res) =>{
    let vehicleID = req.params.id;
    const { vehicleNo,vModel,nicNo,ownerName,manufacYear,vType} = req.body;

    const updateVehicle = {
        vehicleNo,
        vModel,
        nicNo,
        ownerName,
        manufacYear,
        vType
       

    }

    const update = await Vehicle.findByIdAndUpdate(vehicleID,updateVehicle)
    .then(()=>{
        res.status(200).send({status: "Vehicle Updated"})
        
    }).catch((err) =>{
        console.log(err)
        res.status(500).send({status:"Updating data Err",error: err.message});
    })
})


/*http://localhost:5000/vehicle/delete/ */

router.route("/delete/:id").delete(async (req, res) =>{
    let vehicleID = req.params.id;

    await Vehicle.findByIdAndDelete(vehicleID)
    .then(()=>{
        res.status(200).send({status: "Vehicle Deleted"});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Deleting Err",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let vehicleID = req.params.id;

    const vehicle = await Vehicle.findById(vehicleID)
    .then((vehicle)=>{
        // res.status(200).send({status: "Vehicle fetched", vehicle: vehicle});
        res.json(vehicle);
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Fetching Err",error: err.message});
    })
})

module.exports = router;
