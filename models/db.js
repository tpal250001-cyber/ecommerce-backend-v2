const mongoose = require("mongoose")
require("dotenv").config();


 mongoose.connect(process.env.Mongo_url)
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