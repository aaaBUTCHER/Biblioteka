const express=require("express");
const router=express.Router();
router.use(express.static("views"))
router.get("/",(req, res)=>{
    res.render("bookprofile",{name: "Hello"});
});

const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"C:\\Users\\Dardan Gjoka\\Desktop\\Biblioteka\\views\\img\\img1.jpg"};
router.get("/:id",(req, res)=>{
    res.render("bookprofile",{title: dbBookProfile.titulli, author: dbBookProfile.autori, img: dbBookProfile.img});
});

module.exports=router;