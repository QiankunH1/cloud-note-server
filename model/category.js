const mongoose = require ('mongoose')
const category = new mongoose.Schema({
  name:{
      type:String,
      unique:true
  }
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})
// userModel=mongoose.model("user",user)
// module.exports=userModel


module.exports = mongoose.model("category",category)