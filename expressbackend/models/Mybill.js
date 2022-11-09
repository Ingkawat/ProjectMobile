import mongoose from "mongoose";

// Defining Schema
const mybillSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  username:{type:String, required:true, trim:true},
  password:{type:String, required:true, trim:true},
  confirmpassword:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
  phonenum:{type:String, required:true, trim:true},
})

// Model 
const MybillModel = mongoose.model("mybill", mybillSchema)

export default MybillModel