const { Cart } = require("../models/db3");
const { Middleware } = require("../middleware/Authmiddleware");
//const { Cart } = require("../../frontend/src/pages/cart");
//const { default: products } = require("razorpay/dist/types/products");

async function Addtocart(req, res) {
  const Userid = req.user._id;
  const Productid = req.body.Productid;

  const cart = await Cart.findOne({ Userid });
  console.log(cart);
  if (!cart) {
    await Cart.create({
      Userid: Userid,
      items: [
        {
          Productid: Productid,
          quantity: 1,
        },
      ],
    });
  } else {
    function tushar(x) {
      if (x.Productid.toString() === Productid) {
        return x;
      } else {
        return;
      }
    }

    const item = cart.items.find(tushar);
    console.log(item);
    if (item) {
      item.quantity = item.quantity + 1;
      await cart.save();
    } else {
      cart.items.push({
        Productid: Productid,
        quantity: 1,
      });

      await cart.save();
    }
  }
  res.json({
    message: "careted",
  });
}
async function Getcart(req, res) {
  const userid = req.params.userid;
  
  const cart = await Cart.findOne({ Userid: userid }).populate("items.Productid","_id name price description category imageUrls",);

  res.json({
    message: cart,
  });

}

async function Updatequantity(req, res) {
  const userid = req.user._id;
  const actions = req.body.actions;
  const Productid = req.body.Productid;
  const cart = await Cart.findOne({ Userid: userid });
  console.log(cart);
  if (cart) {
    function tushar(x) {
      if (x.Productid.toString() === Productid) {
        return x;
      }
    }
    let item = cart.items.find(tushar);
    if (!item) {
      return null;
    }
    console.log(item);
console.log(actions)
    if (actions === "increase") {
      item.quantity = item.quantity + 1;
      await cart.save();
    } else if(actions === "decrease"){
      if (item.quantity <= 1) {
          cart.items = cart.items.filter((x) => {
          if (x.Productid.toString() !== Productid) {
            return x;
          } });
        await cart.save();
      }
    else {
      console.log("qanitits",item.quantity)
      if(item.quantity > 1){
      item.quantity = item.quantity - 1;
      await cart.save();
      }
  }}
 }else {
    return res.json({
      message: "cart is not found",
    });
  }
  res.json({
    message: "updated quantity",
  });
}

async function Removeitem(req, res) {
  const Userid = req.user._id;
  const Productid = req.body.Productid;

  const cart = await Cart.findOne({ Userid });

  if (cart) {
    function tushar(x) {
      if (x._id.toString() !== Productid) {
        return x;
      }
    }
    cart.items = cart.items.filter(tushar);
    await cart.save();

    console.log(cart);
  }

  res.json({
    message: "deleted",
  });
}
module.exports = { Addtocart, Getcart, Updatequantity, Removeitem };
