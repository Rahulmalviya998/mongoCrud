import mongoose from "mongoose";


const Dbconnection= mongoose.connect("mongodb://localhost:27017/studentData",{

}).then(()=>{
 console.log("Database connected successfully");
 
}).catch((err)=>{
    console.log(err);
})

export default Dbconnection;
