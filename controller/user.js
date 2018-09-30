var express = require('express');
var router = express.Router();
var userModel = require('../model/user')
/* GET home page. */
router.post('/user',(req,res)=>{
  let {username,password,email} =req.body
  const avatarNumber = Math.ceil(Math.random()*9)
  const avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`


  if(password&&password.length>5){
    userModel.create({username,password,email,avatar}).then(data=>{
        console.log(data)
        res.json({
          code:200,
          data,
        })
      }).catch(err=>{
        res.json({
            code:400,
            msg:"请输入必要参数",
            err
          })
      })
  }
  else{
    res.json({
        code:200,
        msg:"用户名密码不合法"
      })
  }
})


module.exports = router;