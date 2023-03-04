const express = require("express")
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
   res.json(user);
})

module.exports = _;