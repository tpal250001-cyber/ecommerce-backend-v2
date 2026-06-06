const express = require("express")

const mainRouter  = require(".")
   
const Router = express.Router()

    Router.post("/signup",mainRouter)




    module.exports = Router;