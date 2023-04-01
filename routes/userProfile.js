const express=require("express");
const router=express.Router();

router.get("/",(req, res)=>{
    res.render("includes/navBar",{name: "Hamit"});

});
module.exports=router;