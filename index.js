const express = require("express")
const Authroutes = require("./routes/Authroutes.js")
const Productroutes =  require("./routes/Productroutes.js") 
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth/v1",Authroutes)
app.use("/api/auth/v2",Productroutes)
//app.use("api/auth/v1",user )
app.listen(3001)
                