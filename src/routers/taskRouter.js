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
        message:"data has been added in database",
        tasks: fakeDB,
    })
})

router.patch("/",(req,res,next)=>{
console.log(req.body);



    res.json({
        status:"success",
        message:"response from put"
    })
})

router.delete("/:id",(req,res,next)=>{

    const {id} =req.params;
    console.log(id);
fakeDB = fakeDB.filter(item=>item.id!==+id)
    res.json({
        status:"success",
        message:"task has been deleted "
    })
})

export default router;