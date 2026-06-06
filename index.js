const express = require("express")
const index = require("./routes/index.js")
const cors = require("cors")
const app = exprees()
app.use(cors())
app.use(express.json())

app.use("api/auth/v1",index)
//app.use("api/auth/v1",user )
app.listen(3001)
                