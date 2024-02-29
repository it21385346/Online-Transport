const router = require("express").Router();
let Time = require("../models/Time");

router.route("/add").post((req,res)=>{

    
    const from = req.body.from;
    const to = req.body.to;
    const time=req.body.time;

    const newTime = new Time({

        from,
        to,
        time,
    })
    newTime.save().then(()=>{
        res.json("Time Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Time.find().then((times)=>{
        res.json(times)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {from, to,time} = req.body;

    const updateTime = {
        from,
        to,
        time
    }
    const update = await  Time.findByIdAndUpdate(userId, updateTime)
    .then(() => {
        res.status(200).send({status: "Time updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Time.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete user", error: err.messege});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Time.findById(userId)
    .then((time) => {
        res.status(200).send({status: "User fetched", time})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get user",error: err.messege});
    })
})

module.exports = router;
