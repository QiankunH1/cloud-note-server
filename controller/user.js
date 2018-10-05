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
          msg:'注册成功',
          data,
        })
      }).catch(err=>{
        res.json({
            code:400,
            msg:"请输入必要参数",                                              
            err
          })
      })
  }else{
    res.json({
        code:400,
        msg:"用户名密码不合法"
      })
  }
})


router.post('/login',(req,res)=>{
  let {email, password} = req.body
  userModel.findOne({email}).then(userData=>{
    if(!userData){
      res.json({
        code:400,
        msg:"用户名不存在"
      })
    }else{
      if(password&&password==userData.password){
        req.session.user = userData
        console.log(req.session.user)
        res.json({
          code:200,
          msg:'登陆成功',
          userData:{
            username:userData.username,
            avatar:userData.avatar,
            email:userData.email,
          }
        })
      }else{
        res.json({
          code:404,
          msg:'密码错误'
        })
      }
    }
  }) 
})


router.get('/logout',(req,res)=>{
  console.log(req.session.user)
    if(req.session.user){
      req.session.user=null
      res.json({
        code:200,
        msg:'退出登陆成功'
      })
    }else{
      res.json({
        code:403,
        msg:'用户未登录状态'
      })
    }
})



module.exports = router;