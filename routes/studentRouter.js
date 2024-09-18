import express from "express";
import multer from "multer";
import storage from "../controller/storage.js";
import studentData from "../controller/userdata.js";
import getUser from "../controller/getUser.js";
import deleteUser from "../controller/deleteuser.js";
import updateUser from "../controller/updateUser.js";
const router= express.Router();
const upload= multer({storage:storage});

router.post("/post",upload.single("image") ,studentData);
router.get("/getuser", getUser);
router.delete("/delete", deleteUser);
router.put("/update",updateUser);
export default router;