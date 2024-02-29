const router = require("express").Router();
let Salary = require("../models/Salaryinfo");

//add salary details route
router.route("/entersal").post((req,res)=>{
    const empID = req.body.empID;
    const basicSalary = Number(req.body.basicSalary);
    const OT = Number(req.body.OT); 
    const allowances = Number(req.body.allowances);
    const payrollDeduct = Number(req.body.payrollDeduct);
    const netSalary = Number(req.body.netSalary);
    const salaryPeriod = req.body.salaryPeriod;

    const newSalary = new Salary({
        empID ,
        basicSalary,
        OT, 
        allowances,
        payrollDeduct,
        netSalary,
        salaryPeriod
    })

    newSalary.save().then(()=>{
        res.json("Salary details Added")
    }).catch((err)=>{
        console.log(err);
        res.status(401).send({message:'Employee ID already exist!'});
    })
})

//get all employees salary details to frontend route
router.route("/getallsal").get((req,res)=>{
    Salary.find().then((salary)=>{
        res.json(salary)
    }).catch((err)=>{
        console.log(err);
    })

})

//update route
router.route("/editsal/:empID").put(async(req,res)=>{
    let userId = req.params.empID;//id comes as a url parameter
    //destructure-frontend variables pass to backend as a object
    const {
        basicSalary,
        OT, 
        allowances,
        payrollDeduct,
        netSalary,
        salaryPeriod} = req.body;

    const updateSalary = {
        
        basicSalary,
        OT, 
        allowances,
        payrollDeduct,
        netSalary,
        salaryPeriod
    }
    const update = await Salary.findOneAndUpdate({empID:userId},updateSalary)
    .then(()=>{
        res.status(200).send({status:"Salary details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })
    
})

//delete route
router.route("/removesal/:empID").delete(async(req,res)=>{
    let userId = req.params.empID;
    await Salary.findOneAndDelete({empID:userId}).then(()=>{
        res.status(200).send({status:"Salary details deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deletion", error:err.message});
    })
})

//get data of one salary 
router.route("/fetchsal/:empID").get(async(req,res)=>{
    let userId = req.params.empID;
    const user = await Salary.findOne({empID:userId}).then((salary)=>{
        res.status(200).send({status:"Salary Record fetched", salary});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching data", error:err.message});
    })
})

module.exports = router;