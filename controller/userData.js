import express from "express";
import bcrypt from "bcryptjs";
import Usermodel from "../model/usermodel.js";

const studentData= async(req, res,next)=>{
    const {name, email, password}=req.body;
    const image= req.file;
    try{
        const hasspass= await bcrypt.hash(password,10);
        const response= await Usermodel.create({name,email,password:hasspass,image:image.filename});
        return res.json(response);

    }catch{
        return res.status(500).json({ error: "Internal Server Error2" });
    }
}
export default studentData;