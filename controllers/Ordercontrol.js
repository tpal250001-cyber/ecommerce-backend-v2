const { Order } = require("../models/db2");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
 
});

async function Createorders(req, res) {
  const { items, totalamount, address, paymentid } = req.body;
  const userid = req.user._id;
  console.log(userid);
  try {
    if ((!items || items.length === 0 || !totalamount || !address)) {
      return res.json({
        message: "missing something",
      });
    } else {
      const razorpayorder = await razorpay.orders.create({
        amount: totalamount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });
      console.log( "iddd",  razorpayorder);
      console.log(razorpayorder.id,"tusahr")
      const order = await Order.create({
        Userid: userid,
        items: items,
        totalamount: totalamount,
        address: address,
        orderid: razorpayorder.id,
      });

      return res.json({
        order:order,
        razorpayorder :razorpayorder,
        message: "order created successfully",
      });
    }
  } catch (error) {
    (console.log(error),
      res.json({
        message: "error",
      }));
  }
}

async function Getallorder(req, res) {
  const Userid = req.user._id;

  try {
    const Alluser = await Order.find({ Userid }).populate("User", "_id name");

    res.json({
      Alluser,
    });
  } catch (error) {
    return res.json({
      message: "error",
    });
  }
}

async function Getmyorderr(req, res) {
  const id = req.params.id;

  const order = await Order.findById({ _id: id });

  res.json({
    message: order,
  });
}

async function Updateorderstatus(req, res) {
  const Status = req.body.Status;
  const id = req.params.id;
  const updatedorder = await Order.updateOne(
    { _id: id },
    {
      $set: { Status: Status },
    },
  );

  res.json({
    message: "update order status",
  });
}

module.exports = { Createorders, Getmyorderr, Getallorder, Updateorderstatus };
