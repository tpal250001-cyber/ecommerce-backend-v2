const express = require("express")
const { Middleware } = require("../middleware/Authmiddleware")
const { Admin } = require("../middleware/Adminmiddleware")
const { Createorders } = require("../controllers/Ordercontrol")
const { Getmyorderr } = require("../controllers/Ordercontrol")
const { Getallorder } = require("../controllers/Ordercontrol")
const { Updateorderstatus } = require("../controllers/Ordercontrol")
const { VerifyPayment } = require("../controllers/paymentverify")

const router = express.Router()


router.post("/create",Middleware, Createorders);
router.get("/get",Middleware,Admin, Getallorder);
router.get("/get/:id",Middleware,Getmyorderr)
router.put("/update/:id/status",Middleware,Updateorderstatus)
router.post("/verify",Middleware,VerifyPayment)

module.exports =router