import multer from "multer";
const storage=multer.diskStorage(
    {
        destination:(req ,file ,cb)=>{
            cb(null, './uploads')
        },
        filename:(req,file,cb)=>{
           const uniqname= Date.now()
            cb(null, uniqname+file.originalname);
        }
    });

export default storage;