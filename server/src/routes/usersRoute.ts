import express, {Request, Response} from "express";
import { uploadPhoto } from "../controllers/usersController";
import { multerUploads } from "../middleware/multer";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
    console.log("request", req)
    res
        .status(200)
        .json({ msg: "Test route working." });
});

// router.post("/profile/photoUpload", jwtAuth, multerUploads.single("image"), uploadPhoto);
router.post("/profile/photoUpload", multerUploads.single("image"), uploadPhoto);

export default router;