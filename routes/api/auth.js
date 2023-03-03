const express = require("express")
const _ = express.Router()

_.post("/registration" , (req, res) => {
   let {email, fullname, password, issubscribe} = req.body;

   if(!email) {
    return res.json({error: "Please enter a valid email"})
   }
   if(!fullname) {
    return res.json({error: "Please enter a valid fullname"})
   }
   if(!password) {
    return res.json({error: "Please enter a valid password"})
   }
   
   res.json({email, fullname, password, issubscribe});
})

module.exports = _;