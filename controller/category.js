var express = require('express')
var router =express.Router()
const categoryModel = require('../model/category')


router.get('/category',(req,res)=>{
    categoryModel.find().then(data=>{
        res.json({
            code:200,
            data
        })
    })
})

router.get('/category/:id',(req,res)=>{
    let{id}=req.params
    categoryModel.findById(id).populate({
        path:'author',
        select:'-password -email '
    }).populate({
        path:'category'
    }).then(data=>{
        res.json({
            code:200,
            data
        })
    })
})


router.post('/category',(req,res)=>{
    let {name} = req.body
    categoryModel.create({name}).then(data=>{
        res.json({
            code:200,
            msg:'分类创建成功',
            data 
        })
    })
})








module.exports = router;