const { Order } = require("../models/db2")
const crypto = require("crypto");
  async function VerifyPayment(req, res){
  try {
    console.log(req.body)
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature,Userid } = req.body;
console.log(req.body,"tushar")
console.log(razorpay_order_id)
console.log(razorpay_payment_id)
    const generatedSignature = crypto
      .createHmac("sha256", "po8AyTjkNQVTtPyROpRKUeZ4")
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
console.log(generatedSignature)
console.log(razorpay_signature)
    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Payment verification failed" });
    }
   console.log("updated")
    // Signature match ho gaya, ab DB me order update karo
   const updatedd =   await Order.findOneAndUpdate(
      { orderid: razorpay_order_id },
      {
        Status: "delivered",
        paymentid: razorpay_payment_id,
         
      },
      {new:true}
    );
   
    return res.status(200).json({ message: "Payment verified successfully",updatedd });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Verification error" });
  }
};
module.exports = { VerifyPayment }