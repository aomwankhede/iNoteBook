const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const JWT_SECRET='ThisIsVerySecret';
//create a user using :POST '/api/auth/createUser' .Doesnt require Login

// If we send the data using get we may find our data on the log file
router.post(
  "/createUser",
  [
    //second argument is the custom message
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isLength({ min: 3 }),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with the same email exists in the database
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: `This email have already a account ${user.name}` });
      }
      const salt= await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,10);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data={
        id:user.id
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      console.log(authToken);
      res.json({ authToken });
    } catch(err) {
      //use logger sqs
      console.log(err)
      res.json({ message: err.message });
    }
  }
);

module.exports = router;
