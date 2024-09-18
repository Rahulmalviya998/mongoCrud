import mongoose from "mongoose";

const User=new mongoose.Schema({
    name:{
        type:String, required:true
    },
    email:{
        type:String, required:true, unique:true
    },
    password:{
        type:String, required:true
    }, 
    image:{
        type:String, required:true
    }
},{
    timestamps:true
});


const Usermodel= mongoose.model("user", User);
export default Usermodel;