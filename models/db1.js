const mongoose = require("mongoose")
//const { type } = require("os")
//const { required } = require("zod/mini")
const Schema = mongoose.Schema

const Productschema = new Schema({
  
  name:{type:String , required:true},
  description:{type:String , required:true},
price:{type:String , required:true},
category:{type:String , required:true},
stock:{type:String , required:true},
imageUrls: {type:String , required:true} ,
createdat:{type:Date , default:Date.now},
rating:{type:Number , default:0},
numReviews:{type:Number , default:0},

})
const Product = mongoose.model('Product',Productschema)

module.exports = { Product }
