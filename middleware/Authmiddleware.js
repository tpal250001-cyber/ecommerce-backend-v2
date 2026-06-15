const JWT_SECRET = "Tushar Pal"
const jwt = require("jsonwebtoken")
const   { User }   = require("../models/db");
const { length } = require("zod");

async function Middleware(req,res,next){


const token  = req.headers.token;
try{
const decodeddata = jwt.verify(token,JWT_SECRET)
console.log(decodeddata)
console.log(decodeddata.id)
if(decodeddata){
   console.log(decodeddata.id)

  req.user = await User.findById(decodeddata.id)
const userid = req.user;
console.log(userid)
console.log(req.user._id)
next()

}


else{
  return res.json({message:"invalid token"})
}
}catch(error){
  
   console.log(error,"invalid user")
    
}
}
module.exports = { Middleware }