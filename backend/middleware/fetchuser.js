const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const fetchuser=(req,res,next)=>{
    //Get the user from the JWT token
    //and add id to reqObj;

    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error:'Access Denied'})
    }
    
    try{
        const data =jwt.verify(token,'ThisIsVerySecret');
        req.user=data.user;
        next();//this is the third argument
    }
    catch(error){
        res.status(401).send({error:'Access Denied'})
    }
}
module.exports=fetchuser;