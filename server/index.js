// third party modules
const express = require("express")
const cors =require("cors")
const app = express()
const infoRouter = require('./router')
const mongoose =require("mongoose")
// middlewares
app.use(express.json())
app.use(cors())
app.use("/info",infoRouter)
// Database Connection
mongoose.connect("mongodb://localhost:27017/mernstack",{ useNewUrlParser: true,useUnifiedTopology: true  }).then(e =>
{
    console.log("Db successfully Connected")
})
// listening port
const Port = 5000
 app.listen(Port,()=>
 {
     console.log("server started Sucuessfully at "+Port)
 })