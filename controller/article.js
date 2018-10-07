
var express = require('express')
var router = express.Router()
const articleModel = require('../model/article')
// const categoryModel = require('../model/category')

router.post('/article',(req,res)=>{
    if(req.session.user){
        let{title,content,contentText,categories}=req.body
        articleModel.create({title,content,contentText,categories,author:req.session.user._id}).then(data=>{
            res.json({
                code:200,
                msg:'插入成功',
                data
            })
        })
    }else{
        res.json({
            code:403,
            msg:'用户未登录'
        })
    }

})


router.get('/article',(req,res)=>{
    let{pn=1,size=10}=req.query
     pn = parseInt(pn)
     size = parseInt(size)
    articleModel.find().limit(size).skip((pn-1)*size).populate({
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

router.get('/article/:id',(req,res)=>{
    let{id}=req.params
    articleModel.findById(id).populate({
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
 


module.exports = router  