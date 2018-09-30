const mongoose = require ('mongoose')
const user = new mongoose.Schema({
    avatar:String,
    username:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    desc:String
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})
userModel=mongoose.model("user",user)
module.exports=userModel


// module.exports = mongoose.model("user",user)