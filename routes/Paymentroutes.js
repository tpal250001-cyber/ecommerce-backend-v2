const { verify } = require("crypto");
const express = require("express")

const router = express.router()

router.post("/order",Createorders);
router.post("/verify",verifypayment);

module.exports =router