
var express = require('express')
var router = express.Router()

router.get('/article',(req,res)=>{
    let {id , user} = req.query
    res.json({
        code:200,
        msg:'...',
        id,
        user
    })
}

)









module.exports = router