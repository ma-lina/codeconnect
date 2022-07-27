import express, {Request, Response} from "express";
import { login, register, logout, uploadPhoto, updateProfile, getProfile } from "../controllers/usersController";
import { multerUploads } from "../middleware/multer";
import jwtAuth from "../utils/jwtAuth";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
    console.log("request", req)
    res
        .status(200)
        .json({ msg: "Test route working." });
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", jwtAuth, logout);
router.post("/profile/photoUpload", multerUploads.single("image"), uploadPhoto);

// router.post("/updateProfile", jwtAuth, updateProfile);
router.patch("/profile", jwtAuth, updateProfile);
router.get("/profile", jwtAuth, getProfile);
// router.delete("/profile", jwtAuth, deleteProfile);

export default router;