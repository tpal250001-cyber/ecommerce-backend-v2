const express = require("express")
const { Getproduct } = require("../controllers/Productcontrol")
 const { Getproductbyid } = require("../controllers/Productcontrol");
const { Updateproduct } = require("../controllers/Productcontrol");
const { Createproduct } = require("../controllers/Productcontrol");
const { Deleteproduct } = require("../controllers/Productcontrol");
const { Middleware } = require("../middleware/Authmiddleware");
const { Admin } = require("../middleware/Adminmiddleware");

const Router = express.Router()

Router.post("/create",Middleware,Createproduct);
Router.get("/get",Getproduct);
Router.get("/get/:id",Middleware,Getproductbyid);
Router.put("/update/:id",Middleware,Admin,Updateproduct);
Router.delete("/delete/:id",Middleware,Admin,Deleteproduct);

module.exports = Router