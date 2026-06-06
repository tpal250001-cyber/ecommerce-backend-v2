const mongoose = require("mongoose")
const { object } = require("zod")
 mongoose.connect("mongodb+srv://tpal250001_db_user:tushar@cluster0.sfhfwki.mongodb.net/MY-APP")

  const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;

const userschema =  new Schema({

email:String,
Password:Number


})

const Usermodel = mongoose.model("Usermodel",userschema)



const todoschema = new Schema({
    
    todolist : String,
     name : String,
     des : String,
    creatorId:ObjectId,


})

const Todomodel = mongoose.model("Todomodel",todoschema)

module.exports={
    Usermodel,
    Todomodel,


}