const express = require("express")
var jwt = require('jsonwebtoken');
const _ = express.Router();
const User = require("./../../models/user");
const MerChant = require("./../../models/merchant");
const {sendVerificationEmail} = require("../../utils/emailSender");
const bcrypt = require("bcrypt");

_.post("/registration", async (req, res) => {
   let {
      email,
      phoneNumber,
      firstName,
      lastName,
      password
   } = req.body;

   if (!email) {
      return res.json({
         error: "Please enter a valid email"
      })
   }
   if (!firstName) {
      return res.json({
         error: "Please enter a valid firstName"
      })
   }
   if (!lastName) {
      return res.json({
         error: "Please enter a valid lastName"
      })
   }
   if (!password) {
      return res.json({
         error: "Please enter a valid password"
      })
   }

   let duplicateEmail = await User.find({
      email: email
   });
   console.log(duplicateEmail);

   if (duplicateEmail.length > 0) {
      return res.json({
         error: "Already email exist"
      });
   }

   bcrypt.hash(password, 10, function (err, hash) {

      const user = new User({
         email,
         phoneNumber,
         firstName,
         lastName,
         password: hash,
      })

      user.save();

      let username = user.firstName + user.lastName;
      // jwt
      var token = jwt.sign({
         email: user.email
      }, process.env.JWTSECRET, {
         expiresIn: '1h'
      });

      sendVerificationEmail(user.email, username, token);
      res.json({
         ...user,
         token: token
      });
   })


})

_.post("/emailverification", (req, res) => {
   // console.log(req.headers.authorization) 
   jwt.verify(req.headers.authorization, process.env.JWTSECRET,
      async function (err, decoded) {
         let existingUser = await User.findOneAndUpdate({
            email: decoded.email
         });
         if(existingUser.verified == "true"){
            return res.json({error: "Email Already Verified"})
         }
         let updatedUser = await User.findOneAndUpdate({
            email: decoded.email
         }, {
            verified: true
         }, {
            new: true
         });

         res.json(updatedUser);
      });

})

_.post("/login", async (req, res) => {
   let {email, password} = req.body;
   let existingUser = await User.find({email: email});

   if(existingUser.length == 0){
      return res.json({error: "Email Not Found"});
   }

   console.log(!existingUser[0].verified);
})

_.post("/forgotpassword", async (req, res)=> {
   let {email} = req.body;

   let existingUser = await User.find({email: email});

   if(existingUser.length == 0){
      return res.json({error: "Email Not Found"});
   }

   sendVerificationEmail(email, existingUser[0].username, 123456);
   res.json({message: "Check Your Email"});
})

_.post("/becomeamerchant", (req, res)=>{
   const {name, email, phoneNumber} = req.body;

   let merchant = new MerChant({
      name, email, phoneNumber
   });

   merchant.save();

   res.json(merchant)

});


_.post("/merchantstatus", async (req, res)=> {
const {email, status} = req.body;

   let updatemerchantstatus = await MerChant.findOneAndUpdate({email},{status}, {new: true});

   res.json(updatemerchantstatus)
})

module.exports = _;