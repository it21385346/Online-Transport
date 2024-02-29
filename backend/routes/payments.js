const router = require("express").Router();
let Payment = require("../models/payment");

router.route("/add").post((req,res)=>{

      const name = req.body.name;
      const address = req.body.address;
      const city = req.body.city;
      const postalcode = req.body.postalcode;
      const phonenum = req.body.phonenum;
      const cardnum = req.body.cardnum;
      const expirydate = req.body.expirydate;
      const ccv = req.body.ccv;

      const newPayment = new Payment({
        name,
        address,
        city,
        postalcode,
        phonenum,
        cardnum,
        expirydate,
        ccv  
    })

    newPayment.save().then(()=>{
        res.json("Payment created")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })

})



router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {name, address, city, postalcode, phonenum} = req.body; 

    const updatePayment = {
        name,
        address,
        city,
        postalcode,
        phonenum
    }

    
    const update = await Payment.findByIdAndUpdate(userId, updatePayment).then(()=>{
        res.status(200).send({status:"Payment details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating the payment", error: err.message});
    })
})


router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await Payment.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Payment details deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with deleting the payment", error: err.message});
    })
})



router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Payment.findById(userId).then(()=>{
        res.status(200).send({status:"Payment details fetched", user: user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetching payment details" , error: err.message})
    })
})

     

module.exports = router;