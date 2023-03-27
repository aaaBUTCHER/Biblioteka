const express=require("express");
const router=express.Router();

const navObjFront={'/':'Faqja Kryesore', '/book-collection':'Koleksioni i Librav'};
router.get("/",(req, res)=>{
    res.render("navBar", navObjFront);

});
module.exports=router;