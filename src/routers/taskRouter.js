import express from "express";
const router = express.Router();

/* router.all("/",(req,res,next)=>{

    res.json({
        status:"success",
        message:"response from all"
    })

    next()
}) */
 let fakeDB = [];

router.get("/",(req,res,next)=>{

    res.json({
        status:"success",
        message:"response from get"
    })
})

router.post("/",(req,res,next)=>{
const data = req.body;
fakeDB.push(data);
console.log(fakeDB);
    res.json({
        status:"success",
        message:"data has been added in database"
    })
})

router.put("/",(req,res,next)=>{

    res.json({
        status:"success",
        message:"response from put"
    })
})

router.delete("/",(req,res,next)=>{

    res.json({
        status:"success",
        message:"response from delete"
    })
})

export default router;