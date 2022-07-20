import express from "express";
import { uploadPhoto } from "../controllers/usersController";
import { multerUploads } from "../middleware/multer";

const router = express.Router();

// router.post("/profile/photoUpload", jwtAuth, multerUploads.single("image"), uploadPhoto);
router.post("/profile/photoUpload", multerUploads.single("image"), uploadPhoto);

export default router;