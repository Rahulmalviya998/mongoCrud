import express from "express";
import cors from "cors";
import multer from "multer";
import Dbconnection from "./dbcConfig/Dbconnection.js";
import router from "./routes/studentRouter.js";
const port = process.env.PORT || 5000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("./uploads"));
app.use("/user", router);

app.listen(port, () => {
    console.log(`server started at port  ${port}`);

});
