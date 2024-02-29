const router = require("express").Router();
let AdminLogin = require("../models/AdminLogin");



router.route("/add").post((req,res) => {
    
    const email    = req.body.email;
    const password   = req.body.password;

   

    AdminLogin.findOne({email: email})
    .then((savedAdminLogin) => {
        if(savedAdminLogin) {
            return res.status(422).json({error:"user already exists with that email"})
        }

    const newAdminLogin = new AdminLogin({
        email,
        password

    })

    newAdminLogin.save().then(() => {
         res.json("AdminLogin Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})


router.route("/").get((req,res) => {
     
    AdminLogin.find().then((adminlogins) => {
        res.json(adminlogins)

    }).catch((err) => {
        console.log(err)
    })


})



router.route("/get/:id").get(async(req, res) => {

    let userId = req.params.id;
    const user = await AdminLogin.findById(userId).then((adminlogin) => {
        res.status(200).send({status: " User fetched", adminlogin})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})


router.route("/get/:email").get((req, res) => {

     AdminLogin.findOne({email:email})
     .then((adminlogin) => {
        res.status(200).send({status: " User fetched", adminlogin})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})




router.route("/adminlog").post((req,res) => {
{/*const email = req.body.email;
const password     = req.body.password; */}

    const email    = req.body.email;
    const password   = req.body.password;

    const newAdminLogin = new AdminLogin ({
      
        email, 
        password,

    })
 if(!email || !password){
     res.status(422).json({error:"Please add email or password"})
 }
  AdminLogin.findOne({email:email})
  .then(savedAdminLogin =>{
      if(!savedAdminLogin){
         return  res.status(422).json({error:"Invalid Email or Password"})

      }

      AdminLogin.findOne({password:password})
      .then(savedAdminLogin =>{
        if(savedAdminLogin){
             {/* res.json({message:"successfully signed in"}) */}

             res.json(AdminLogin);
            
            
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