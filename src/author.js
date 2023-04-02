const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
     res.status(200).send("Hello Author");
});

router.get("/login",(req,res)=>{
     res.status(200).send("Author Login");
});
router.get("/logout",(req,res)=>{
     res.status(200).send("Author Logout");
});

module.exports=router;