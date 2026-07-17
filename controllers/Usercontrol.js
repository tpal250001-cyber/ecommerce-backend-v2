//const express = require("express")
require("dotenv").config();
const  { User } = require("../models/db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
//const  sendEmail = require("../utils/sendemail");
//const bcrypt = require("bcrypt") 
const Middleware = require("../middleware/Authmiddleware");
//const app = express(); 

//const router = express.Router()


async function Signup(req,res){

 const name = req.body.name;
 const email = req.body.email;
const password = req.body.password;
  try{
   const existinguser = await User.findOne({
    email
   })
   if(existinguser){
    return res.json({
        message:"user already present"
    })
    
   }
   
   
   const user = await User.create({
   name:name,
   email:email,
   password:password

   })
    res.json({
    message:"user created or signup successfully"
   })
  }catch(error){

        console.log(error,res.status(400))
   }


}




 async function Signin(req,res){

 const name = req.body.name;
 const password = req.body.password;


   const user = await User.findOne({
    name:name
   })
  console.log(name)
   if(user){
    const token= jwt.sign({id :user._id},JWT_SECRET)
     return res.json({
        token,
        userid:user._id
    })
   }
   res.json({
   message:"user not found"
   })



}

async function Update(req,res){
         const id = req.params.id;
         const { name } = req.body;
       const updated =   await User.findByIdAndUpdate(
        
       id,
           {name},
       {new:true}
      
      )

         res.json({
          message:"update succesfully",
          updated
         })

}
 
async function Getuser(req,res){

  try{
  const Alluser = await User.find({});
console.log(Alluser)
  res.json({
    Alluser
  })
  }catch(error){
    res.status(500).json({message:"server errors"})
  }


}


module.exports = {Signup ,Signin, Update, Getuser}















