const router = require("express").Router();
let Passenger = require("../models/Passenger");



//Add Passenger
router.route("/add").post((req,res) => {
    const username = req.body.username;
    const nic      = req.body.nic;
    const email    = req.body.email;
    const phoneno  = Number(req.body.phoneno);
    const password   = req.body.password;
    const userlevel  = req.body.userlevel;
    const userleveldate = Date(req.body.userleveldate);

    if(!username || !nic || !email || !phoneno || !password){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    Passenger.findOne({email: email})
    .then((savedPassenger) => {
        if(savedPassenger) {
            return res.status(422).json({error:"user already exists with that email"})
        }

    const newPassenger = new Passenger({
        username,
        nic,
        email,
        phoneno,
        password,
        userlevel,
        userleveldate

    })

    newPassenger.save().then(() => {
         res.json("Passenger Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})


router.route("/").get((req,res) => {
     
    Passenger.find().then((passengers) => {
        res.json(passengers)

    }).catch((err) => {
        console.log(err)
    })


})


//update passenger using an ID
router.route("/update/:id").put(async (req, res) => {
      let userId = req.params.id;
      const {username, nic,email, phoneno,password,userlevel,userleveldate} = req.body;

      const updatePassenger = {
          username,
          nic,
          email,
          phoneno,
          password,
          userlevel,
          userleveldate
      }


      const update = await Passenger.findByIdAndUpdate(userId, updatePassenger).then(() => {
        res.status(200).send({status: "User updated"})
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with updating data", error: err.message});
      })   
})



//Delete passenger Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Passenger.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "User deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete user", error: err.message});
      })
    })


router.route("/get/:id").get(async(req, res) => {

    let userId = req.params.id;
    const user = await Passenger.findById(userId).then((passenger) => {
        res.status(200).send({status: " User fetched", passenger})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})


router.route("/get/:email").get((req, res) => {

     Passenger.findOne({email:email})
     .then((passenger) => {
        res.status(200).send({status: " User fetched", passenger})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})




router.route("/signin").post((req,res) => {
{/*const email = req.body.email;
const password     = req.body.password; */}
const username = req.body.username;
    const nic      = req.body.nic;
    const email    = req.body.email;
    const phoneno  = Number(req.body.phoneno);
    const password   = req.body.password;
    const userlevel = req.body.userlevel;
    const userleveldate = Date(req.body.userleveldate );

    const newPassenger = new Passenger ({
        username,
        nic,
        email, 
        phoneno,
        password,
        userlevel,
        userleveldate,

    })
 if(!email || !password){
     res.status(422).json({error:"Please add email or password"})
 }
  Passenger.findOne({email:email})
  .then(savedPassenger =>{
      if(!savedPassenger){
         return  res.status(422).json({error:"Invalid Email or Password"})

      }

      Passenger.findOne({password:password})
      .then(savedPassenger =>{
        if(savedPassenger){
             {/* res.json({message:"successfully signed in"}) */}

             res.json(Passenger);
            
            
          }
          else{
              return res.status(422).json({error:"Invalid Email or Password"})
          }
      })
    .catch(err=>{
        console.log(err)
    })

  })
})



module.exports = router;

