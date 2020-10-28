const express = require("express")
const infoSchema = require("./infoSchema")
const router = express.Router()
const InfoRouter = require('./infoSchema')
// route config
router.post("/",async(req,res)=>
{
    var data = new InfoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        Country:req.body.Country
    })
    await data.save()
    res.json(data)
})
router.get('/',async(req,res)=>{
    var findData = await InfoRouter.find();
    res.json(findData)
})
router.put('/Update',async(req,res)=>
{

    var UpdateData = await InfoRouter.updateOne({_id:req.body.id},
        {$set:
        {
        Name:req.body.Name,
        Age:req.body.Age,
        Country:req.body.Country
    }})
    console.log(UpdateData)
 })
router.delete('/del/:id',async(req,res)=>
{
   var DeleteData = await InfoRouter.findByIdAndRemove(req.params.id).then(e =>
        {
            res.json(DeleteData)
        })
    
})
   
module.exports = router