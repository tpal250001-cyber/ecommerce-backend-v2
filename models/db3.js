const mongoose = require("mongoose");
const { type } = require("node:os");
const { tr } = require("zod/locales");
const { required } = require("zod/mini");
const { Product } = require("./db1");
//const { Product } = require("./db1");

const Schema = mongoose.Schema;

const Cartschema = new Schema({
  Userid: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  items: [
    {
      Productid: { type: mongoose.Types.ObjectId, required: true ,ref: "Product"},
      quantity: { type: Number, min: 1, required: true },
      actions:{type :String ,enum:["decrease","increase"] }
    },                              
  ],
});

const Cart = mongoose.model("Cart", Cartschema);

module.exports = { Cart };
