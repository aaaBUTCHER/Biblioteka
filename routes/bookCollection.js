const express=require("express");
const router=express.Router();

router.get("/",(req, res)=>{
    res.render("includes/navBar",{emri: "Koleksioni i librav"});
});

module.exports=router;