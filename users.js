const express = require('express')
const {  mongoose } = require('mongoose')
//const { constants } = require('node:fs/promises')
const { Usermodel,Todomodel } = require("./db")
 const Jwt_Secret = "tushar"
const jwt  = require('jsonwebtoken')
//const { id } = require('zod/locales')
//const { nextTick } = require('process')
const cors = require("cors")

const app = express()
app.use(express.json());
async function signin(req,res){
     
   const email = req.body.email;
   const Password = req.body.Password;

   await Usermodel.create({
     
     email:email,
     Password:Password

   })
    
    res.send({
        
        message:"user signin"
    
    })

}
app.post("/signin",signin)



async function signup(req,res){
      
     const email = req.body.email;
     

  const users =  await Usermodel.findOne({
     email:email,

         });
    if(users){
    const token = jwt.sign({
       id:users._id
     },Jwt_Secret)
   
      res.send({
      
      token:token
      })
    }
    else{
    res.send({
        message:" do not exist in the database"
    })
    }
}
app.post("/signup",signup)



 function auth(req,res,next){
   
    const token = req.headers.token;
    const decdeddata = jwt.verify(token,Jwt_Secret)

      if(decdeddata){

     req.userid = decdeddata.id

     const userid = req.userid;
       next();
        
      }
   else{
    res.send({
        
        message:"it is not in the form of the region"
    
    })
   }
}


app.post("/todo",auth, async(req,res) => {
    
    const todolist = req.body.todolist;
    const name = req.body.name;
    const des = req.body.des;
  const creatorId = req.body.creatorId;
     await Todomodel.create({

       todolist:todolist,
       name:name,
       des:des,
       creatorId:creatorId

    })

    res.json({
        message:"Todo is created"
    })
})

app.delete("/tododlt",auth, async(req,res) => {
    
    const creatorId = req.body.creatorId

     await Todomodel.deleteMany({

      creatorId :creatorId

    })

    res.json({
        message:"Todo is deleted"
    })
})
app.update("/todoudt",auth, async(req,res) => {
    
    
    
    
})
app.listen(3001)
                