const express = require("express")
const { Middleware } = require("../middleware/Authmiddleware");
const { Admin } =  require("../middleware/Adminmiddleware");

const { Signup }= require("../controllers/Usercontrol")
const { Signin }= require("../controllers/Usercontrol")
const { Getuser}= require("../controllers/Usercontrol")
const { Update }= require("../controllers/Usercontrol")

const Router = express.Router()

Router.post("/signup",Signup)
Router.post("/signin",Signin)
Router.get("/get",Middleware,Admin,Getuser)
Router.put("/update/:id",Middleware,Update)

    module.exports = Router;