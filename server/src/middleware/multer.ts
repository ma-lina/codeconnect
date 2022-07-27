import multer from "multer";
import path from "path";

const multerUploads = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req: any, file: any, cb: any) => {
    let extension = path.extname(file.originalname).toLowerCase();
    if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
      cb(new Error("File extension not supported, please choose a jpg/jpeg or png file."), false);
      return;
    }
    cb(null, true);
  },
});

export { multerUploads };