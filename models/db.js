const mongoose = require("mongoose")
const { type } = require("os")
const { object } = require("zod")
const { required } = require("zod/mini")

 mongoose.connect("mongodb+srv://tpal250001_db_user:tushar@cluster0.sfhfwki.mongodb.net/MY-APP")
console.log("conened")
  const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;

const userschema =  new Schema({

name:{type:String,
  required: true
},
email:{type:String,
  required:true,
  unique:true

},
password:{
  type:String,
  required :true
},
role:{type:String,
  enum:['user','admin'],
  required: true,
  default:'user'
},
verified:{
  type:String,
  default:false
}

})

const User = mongoose.model("User",userschema)




module.exports={
    User
   


}