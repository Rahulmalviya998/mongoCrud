import express from 'express';
import Usermodel from '../model/usermodel.js';



const getUser = async (req, res) => {
    try {
        const response = await Usermodel.find();
        return res.json(response);
    } catch {
        return res.json({ error: "something went wrong" })
    }
}
export default getUser;
