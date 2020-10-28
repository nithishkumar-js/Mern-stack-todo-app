const mongoose = require("mongoose")
const infoSchema = mongoose.Schema({
    Name:
    {
        type:String,
        required:true
    },
    Age:
    {
        type:Number,
    },
    Country:
    {
        type:String,
        required:true
    },
})
module.exports = mongoose.model("info",infoSchema)