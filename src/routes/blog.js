const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.get('/blog',async(req,res)=>{
    try {
        let dat=await Blog.find({
            topic:req.query.search},{
                    limit:5,skip:(req.query.page-1)*5
                })
        res.json({dat})

    } catch (error) {
        res.json({
            "message":error.message
        })
    }
    
})
router.post('/blog',async(req,res)=>{
    try {
        let dat=await Blog.create(req.body)
        res.json({dat})
    } catch (error) {
        res.json({
            "message":error.message
        })
    }
    
})
router.put("/blog/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const result=await Blog.findByIdAndUpdate(id,{
            topic:req.body.topic,description:req.body.description,posted_by:req.body.posted_by
        })
        console.log(result)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/blog/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const result=await Blog.findByIdAndDelete(id)
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;