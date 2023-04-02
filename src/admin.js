const express=require("express");
const router=express.Router();


router.use((req,res,next)=>{
     console.log(`Admin Login at ${new Date(Date.now()).toLocaleString()}`);
     next();
});

router.get("/",(req,res)=>{
     res.status(200).send("Hello Admin");
});
// router.get("/:name",(req,res)=>{
//      res.status(200).send(req.params);
// });
router.get("/login",(req,res)=>{
     res.status(200).send("Admin Login");
});
router.get("/logout",(req,res)=>{
     res.status(200).send("Admin Logout");
});


module.exports=router;