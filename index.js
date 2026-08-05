const express = require("express")
require("dotenv").config()
const Authroutes = require("./routes/Authroutes.js")
const Productroutes =  require("./routes/Productroutes.js") 
const Orderoutes  = require("./routes/Orderroutes.js")
const Cartroutes  = require("./routes/Cartroutes.js")
const cors = require("cors")
const app = express()
app.use(cors({
  origin: ["https://ecommerce-frontend-v2-six.vercel.app", "http://localhost:5173"],
  credentials: true
}));
app.use(express.json())

app.use("/api/auth/v1",Authroutes)
app.use("/api/auth/v2",Productroutes)
app.use("/api/auth/v3",Orderoutes)
app.use("/api/auth/v4",Cartroutes)
//app.use("api/auth/v1",user )
app.listen(process.env.PORT)
                