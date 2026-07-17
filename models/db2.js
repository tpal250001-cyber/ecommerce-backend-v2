const mongoose = require("mongoose");
//import { type } from "os";
//import { required } from "zod/mini";
//import { Product } from "./db1";
//import { required } from "zod/mini";
//import { type } from "os";
//import { number, string } from "zod";
const { timeStamp } = require("console");

const Schema = mongoose.Schema;

const Orderschema = new Schema(
  {
    Userid: { type: mongoose.Types.ObjectId, required: true },

    items: [
      {
        Productid: { type: mongoose.Types.ObjectId, required: true },
        qty: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
      },
    ],
    totalamount: { type: Number, required: true },

    address: {
      fullname: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
    },
    orderid: {type :String },
    paymentid: { type: String },
    Status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", Orderschema);

module.exports = { Order };
