const express = require("express");
const { Middleware } = require("../middleware/Authmiddleware")
const {Addtocart,Getcart,Updatequantity,Removeitem} = require("../controllers/Cartcontroller")


const router = express.Router();

router.post("/cart",Middleware,Addtocart);
router.get("/getcart/:userid",Middleware,Getcart);

router.put("/update",Middleware,Updatequantity);
router.delete("/remove",Middleware,Removeitem);

module.exports = router