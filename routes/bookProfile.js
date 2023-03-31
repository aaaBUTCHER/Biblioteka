const express=require("express");
const router=express.Router();
const bookProfileModule= require("../controllers/bookprofile");

router.get("/",(req, res)=>{
    res.render("bookprofile",{name: "Hello"});
});

router.get("/:id", bookProfileModule.getBookProfile);

module.exports=router;