const express=require('express')
const User=require('../models/User')
const {body,validationResult}=require('express-validator');
const router=express.Router();

//create a user using :POST '/api/auth' .Doesnt erequire auth

// If we send the data using get we may fimnd our data on the log file
router.post('/',[
    //second argument is the custom message
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isLength({min:3}),
    body('password','Enter a valid password').isLength({min:5}),
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then((user)=>{res.json(user)}).catch((err)=>{console.log(err);res.json({"mnessage":"Enter valid data"})})
})

module.exports=router