const express=require('express')
const User=require('../models/User')
const router=express.Router();

//create a user using :POST '/api/auth' .Doesnt erequire auth

// If we send the data using get we may fimnd our data on the log file
router.post('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send(req.body);
})

module.exports=router