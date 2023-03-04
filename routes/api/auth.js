const express = require("express")
var jwt = require('jsonwebtoken');
const _ = express.Router();
const User = require("./../../models/user");

_.post("/registration" , (req, res) => {
   let {email, phoneNumber, firstName, lastName, password} = req.body;

   if(!email) {
    return res.json({error: "Please enter a valid email"})
   }
   if(!firstName) {
    return res.json({error: "Please enter a valid firstName"})
   }
   if(!lastName) {
    return res.json({error: "Please enter a valid lastName"})
   }
   if(!password) {
    return res.json({error: "Please enter a valid password"})
   }
   
   const user = new User({
      email, 
      phoneNumber, 
      firstName, 
      lastName, 
      password
   })
   user.save();
   // jwt
   var token = jwt.sign({ email: user.email }, dyg6CYRq9mY!Wn$, { algorithm: 'RS256' });
   res.json(user);
})

module.exports = _;